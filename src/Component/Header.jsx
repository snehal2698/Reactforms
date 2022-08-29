import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
             <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to='/header' className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/registration' className="nav-link" >Registration</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link" href="/Login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/users' className="nav-link">Users</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;