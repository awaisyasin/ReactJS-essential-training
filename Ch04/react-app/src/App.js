import './App.css'
import { useState, useEffect } from 'react'

function App() {
    const [emotion, setEmotion] = useState('Happy')
    const [secondary, setSecondary] = useState('tired')

    useEffect(() => {
        console.log(`It's ${emotion} right now!`)
    }, [emotion])
    useEffect(() => {
        console.log(`It's ${secondary} around here!`)
    }, [secondary])

    return (
        <div className='App'>
            <h1>Current emotion is {emotion}</h1>
            <h1>Current secondary emotion is {secondary}</h1>
            <button onClick={() => setEmotion('sad')}>Sad</button>
            <button onClick={() => setEmotion('exited')}>Exited</button>
            <button onClick={() => setSecondary('bored')}>Bored</button>
            <button onClick={() => setSecondary('grateful')}>Grateful</button>
        </div>
    )
}

export default App

