import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/User/UserContext';

export default function Home() {


    const [formValues, setFormValues] = useState({ "e_id": "", "password": "" });
    let navigate = useNavigate();

    const userContext = useContext(UserContext);
    const {handleSetUserData} = userContext;

    const handleLoginValueChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }


    const handleLoginSubmit = async (event) => {


        try {
            const response = await fetch("http://localhost:8000/login-user",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                    },
                    body: JSON.stringify(formValues)
                });

            const json = await response.json();

            if (json) {

                handleSetUserData("Fuck");
                sessionStorage.setItem('user', JSON.stringify(json['Employee'][0]));
                
                navigate("/schedule", { state: json });
                // window.location.reload();

            }

        } catch(error) {
            alert(error);
        }

    }

    return (
            <>
                {/* {userLoggedIn && <Navbar userLoggedIn = {true}/>} */}

                <div className="container container-fluid">

                    <div className="row my-5 g-5">

                        <div className="col-md-6" style={{ "marginTop": "15%" }}>
                            <h2 className='display-3 fw-bold'>Clinical Rostering</h2>
                            <p className="fw-light fs-4" style={{ "width": "90%" }}>A Smarter Way to Manage Your Clinical Team's Schedule.</p>
                        </div>


                        <div className="col-md-6 ms-auto" style={{ "marginTop": "10%" }}>

                            <div className="d-flex align-items-center">

                                <form style={{ "width": "23rem" }}>

                                    <h2 className="display-6 fw-bold mb-3">Log in</h2>

                                    <div className="mb-4">
                                        <input type="email" id="form2Example18" className="form-control form-control-lg" placeholder='Employee Id' value={formValues.e_id} name='e_id' onChange={handleLoginValueChange} />
                                    </div>

                                    <div className="mb-4">
                                        <input type="password" id="form2Example28" className="form-control form-control-lg" placeholder='Password' value={formValues.password} name='password' onChange={handleLoginValueChange} />
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-info btn-lg btn-block" type="button" onClick={handleLoginSubmit}>Login</button>
                                    </div>

                                    <p className="small mb-4">Forgot password?<a className="link-info" href="#!"> Click here</a></p>

                                    <p>Don't have an account? <a href="#!" className="link-info">Contact us</a></p>

                                </form>

                            </div>

                        </div>

                    </div>
                </div>

            </>
        )
    }
