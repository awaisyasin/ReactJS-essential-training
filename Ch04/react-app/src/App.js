import './App.css'
import { useState, useEffect } from 'react'

const query = `
query {
  allLifts {
    id
    name
    elevationGain
    status
  }
}
`

const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
}

function Lift({ name, elevationGain, status }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>
                {elevationGain} {status}
            </p>
        </div>
    )
}

function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(`https://snowtooth.moonhighway.com/`, opts)
            .then(response => response.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <h1>loading...</h1>

    if (error) return <pre>{JSON.stringify(error)}</pre>

    if (!data) return null

    return (
        <div>
            {data.data.allLifts.map(lift => (
                <Lift
                    key={lift.id}
                    name={lift.name}
                    elevationGain={lift.elevationGain}
                    status={lift.status}
                />
            ))}
        </div>
    )
}

export default App

