import './App.css'
import { useState, useEffect } from 'react'

function App() {
    const [emotion, setEmotion] = useState('Happy')

    useEffect(() => {
        console.log(`It's ${emotion} right now!`)
    }, [emotion])

    return (
        <div className='App'>
            <h1>Current emotion is {emotion}</h1>
            <button onClick={() => setEmotion('Sad')}>Sad</button>
            <button onClick={() => setEmotion('Exited')}>Exited</button>
        </div>
    )
}

export default App

