import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem('user')) {
            setUserLoggedIn(true);

        }
    })


    const handleLoggedOut = () => {
        sessionStorage.removeItem('user');

        alert("User has been logged out.");
        window.location.reload();
    }

    return (



        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <img className='me-2' src={require('../resources/cloudphysician-logo.png')} alt='logo' style={{ "width": "40px" }}></img>

                    <a className="navbar-brand" href="/">Clinical Rostering</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>

                        </ul>

                        {userLoggedIn &&

                            <ul className="navbar-nav ms-auto">

                                <li className="nav-item me-2">
                                    <a className="nav-link" href="/schedule">Schedule</a>
                                </li>

                                <li className="nav-item me-2">
                                    <a className="nav-link" href="/leave-request">Apply Leave</a>
                                </li>

                                <li className='nav-item me-2'>
                                    <a className='nav-link' href='/admin'>Admin</a>
                                </li>


                                <li className='nav-item me-2'>
                                    <a className='nav-link' href='/profile'>Profile</a>
                                </li>

                                <li className='nav-item me-2'>
                                    <a className='nav-link btn btn-sm btn-primary text-white' onClick={handleLoggedOut} href='/logged-out'>Logout</a>
                                </li>   

                            </ul>
                        }

                    </div>

                </div>
            </nav>

        </>
    )
}
