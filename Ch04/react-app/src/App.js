import './App.css'
import { useRef } from 'react'

function App() {
    const textTitle = useRef()
    const colorHex = useRef()

    const submit = e => {
        e.preventDefault()
        const title = textTitle.current.value
        const hex = colorHex.current.value
        alert(`${title}, ${hex}`)
        textTitle.current.value = ""
        colorHex.current.value = ""
    }

    return (
        <div className='App'>
            <form onSubmit={submit}>
                <input ref={textTitle} type='text' placeholder='Color title...'></input>
                <input ref={colorHex} type='color'></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default App

