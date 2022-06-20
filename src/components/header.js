import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            {}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/setting">setting</Link>
                        </li>
                        <li className="nav-item"> 
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                        

                    </ul>
                </div>

            </nav>
        </div>
    )
}
