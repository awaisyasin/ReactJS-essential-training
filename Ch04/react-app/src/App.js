import './App.css'
import { Link, Outlet } from 'react-router-dom'

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
            <h1>
                <Link to='/about/history'>About Us</Link>
            </h1>

            <Link to='/about'>
                <Outlet />
            </Link>
        </div>
    )
}

export function History() {
    return <h1>Our History</h1>
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

