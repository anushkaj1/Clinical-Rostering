import React from 'react'

export default function Footer() {
    return (
        <>

            <footer className="bg-dark text-center text-white fixed-bottom mt-5">
                <div className="text-center p-3" 
                style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
                    © 2023 Copyright:
                    <a className="text-info" 
                    href="https://cloudphysician.net/" target={"_blank"}> Cloudphysician</a>
                </div>

            </footer>

        </>
    )
}
