import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Schedule from './components/Schedule';
import Admin from './components/Admin';
import Admin2 from './components/Admin2';
import LeaveRequest from './components/LeaveRequest';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Profile from './components/Profile';
import { useEffect, useState } from 'react';
import LoggedOut from './components/LoggedOut';
import UserState from './context/User/UserState';

function App() {

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('user')) {
            setUserLoggedIn(true);
        }
    })

    return (
        <>
            {/* Insert componenets */}


            <BrowserRouter>
                <UserState>


                    <Navbar />

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/schedule" element={<Schedule />} />
                        <Route exact path="/admin" element={<Admin />} />
                        <Route exact path="/admin2" element={<Admin2 />} />
                        <Route exact path="/leave-request" element={<LeaveRequest />} />
                        <Route exact path="/profile" element={<Profile />} />
                        <Route exact path='/logged-out' element={<LoggedOut />} />
                    </Routes>

                    <Footer />
                </UserState>

            </BrowserRouter>

        </>
    );
}

export default App;
