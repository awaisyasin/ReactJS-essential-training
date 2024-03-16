import './App.css'

function Home() {
    return <h1>Home Page</h1>
}
export function About() {
    return (
        <div className='App'>
            <h1>About Us</h1>
        </div>
    )
}
export function Contact() {
    return (
        <div className='App'>
            <h1>Contact Us</h1>
        </div>
    )
}

export function App() {
    return (
        <div className='App'>
            <Home />
        </div>
    )
}

