import './App.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='App'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <h1>Home Page</h1>
        </div>
    )
}
export function About() {
    return (
        <div className='App'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <h1>About Us</h1>
        </div>
    )
}
export function Contact() {
    return (
        <div className='App'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <h1>Contact Us</h1>
        </div>
    )
}

export function App() {
    return <Home />
}

