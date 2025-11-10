import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
import HomePage from '../../routes/homepage'

export default function AppHeader() {

    return (
        <div className='bg-light'>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img className="logo me-3" src={logo} alt="logo" />
                    <h1 className="mb-0">Welcome to my Films website</h1>
                </div>
                <nav>
                    <Link to='/' className="text-decoration-none mx-5 text-dark">Home</Link>
                </nav>
            </div>
        </div>
    )
}