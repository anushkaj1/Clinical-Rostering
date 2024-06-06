import React from 'react'

export default function LoggedOut() {
    return (
        <>
            <div className='container container-fluid my-5'>
                <hr></hr>
                <div className='p-5 bg-success bg-opacity-25 rounded-6' style={{"margin" : "5%"}}>
                    <h2>Logout Successful</h2>
                    <p>You have successfully logged out this app. You may 
                        <span><a href='/'> log in</a></span> again.</p>
                    <p>Thank You!</p>
                </div>
                <hr></hr>
            </div>

        </>
    )
}
