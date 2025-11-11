import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'

export default function AppHeader() {

    return (
        <div className='bg-light'>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img className="logo me-3" src={logo} alt="logo" />
                    <h1 className="mb-0">Films website</h1>
                </div>
                <nav>
                    <Link to='/' className="text-decoration-none mx-4 text-dark">Home</Link>
                    <Link to='/films' className="text-decoration-none mx-4 text-dark">Films</Link>
                    <Link to='/admin' className="text-decoration-none mx-4 text-dark">Admin</Link>
                </nav>
            </div>
        </div>
    )
}