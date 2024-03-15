import './App.css'
import { useState } from 'react'

function App() {
    const [title, setTitle] = useState('')
    const [color, setColor] = useState('#000000')

    const submit = e => {
        e.preventDefault()
        alert(`${title}, ${color}`)
        setTitle('')
        setColor('#000000')
    }

    return (
        <div className='App'>
            <form onSubmit={submit}>
                <input
                    onChange={event => setTitle(event.target.value)}
                    type='text'
                    placeholder='Color title...'
                    value={title}
                />
                <input
                    onChange={event => setColor(event.target.value)}
                    type='color'
                    value={color}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default App

