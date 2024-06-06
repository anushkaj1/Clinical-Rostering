import React, { useEffect, useState } from 'react'
import UserContext from '../context/User/UserContext';
import { useContext } from 'react';

export default function Profile() {

    // const userContext = useContext(UserContext);

    // const {userData} = userContext;

    const [userData, setUserData] = useState({
        "e_id": "", "e_name": "", "e_type": "", "location": "", "password": "",
        "primary_specialization": "", "secondary_specialization": ""
    });

    useEffect(() => {

        // console.log(userData);

        if (sessionStorage.getItem('user')) {
            const user = JSON.parse(sessionStorage.getItem('user'));
            setUserData(user);
        }

    }, [])


    return (
        <>
            <section style={{ "marginTop": "1%" }}>
                <div className="container container-fluid py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col col-md-12 mb-4 mb-lg-0">
                            <div className="card mb-3" style={{ "borderRadius": ".5rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white"
                                        style={{ "borderTopLeftRadius": ".5rem", "borderBottomLeftRadius": ".5rem" }}>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                            alt="Avatar" className="img-fluid my-5" style={{ "width": "80px" }} />
                                        <h3>{userData.e_name}</h3>
                                        <h5>{userData.e_type}</h5>
                                        {/* <i className="far fa-edit mb-5"></i> */}
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h2 className='fw-bold'>Information</h2>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Email</h6>
                                                    <p className="text-muted">info@example.com</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>ID</h6>
                                                    <p className="text-muted">{userData.e_id}</p>
                                                </div>
                                            </div>
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Primary Specialization</h6>
                                                    <p className="text-muted">{userData.primary_specialization}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Secondary Specialization</h6>
                                                    <p className="text-muted">{userData.secondary_specialization}</p>
                                                </div>
                                            </div>

                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Location</h6>
                                                    <p className="text-muted">{userData.primary_specialization}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Address</h6>
                                                    <p className="text-muted">IIIT Hyderabad, Gachibowli, Hyderabad - 500032</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Phone</h6>
                                                    <p className="text-muted">123 456 789</p>
                                                </div>
                                            </div>


                                            <h2 className='fw-bold mt-4'>Quick Links</h2>
                                            <hr className='mb-1' />

                                            <div className="row pt-1">
                                                <div className="col-md">
                                                    <button type="button" className="btn btn-primary btn-rounded btn-sm mt-3">View Schedule<i className="fa-solid fa-square-arrow-up-right ms-2" /></button>

                                                    <button type="button" className="btn btn-primary btn-rounded btn-sm ms-3">Leave Request</button>

                                                    <button type="button" className="btn btn-primary btn-rounded btn-sm ms-3">Contact Admin <i className="fa-solid fa-user ms-1"></i> </button>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
