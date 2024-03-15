import './App.css'
import { useState, useEffect } from 'react'

function GithubUser({ name, bio, blog, avatar }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{bio}</p>
            <p>{blog}</p>
            <img src={avatar} alt={name} height={150}></img>
        </div>
    )
}

function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.github.com/users/awaisyasin')
            .then(response => response.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <h1>{loading}</h1>
    }
    if (error) {
        return <pre>{JSON.stringify(error)}</pre>
    }
    if (!data) return null

    return (
        <GithubUser
            name={data.name}
            bio={data.bio}
            blog={data.blog}
            avatar={data.avatar_url}
        />
    )
}

export default App

