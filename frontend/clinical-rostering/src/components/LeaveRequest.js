import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../index.css'
import { useEffect } from 'react';

function LeaveRequest() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [reason, setReason] = useState('');
    const [submittedDates, setSubmittedDates] = useState([]);


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


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const data = {
            e_id: userData['e_id'],
            date: selectedDate.toDateString(),
            reason: reason
        }

        try {
            const response = await fetch("http://localhost:8000/send-leave",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                    },
                    body: JSON.stringify(data)
                });

            const json = await response.json();

            if (json) {
                console.log(json);
                alert("Leave request has been sent");
            }

        } catch (error) {
            alert(error);
        }

    };

    const handleTileClick = (value, event) => {

        console.log(value);
        setSelectedDate(value);
    };

    const tileClassName = ({ date, view }) => {
        if (submittedDates.find((d) => d.toDateString() === date.toDateString())) {
            return 'submitted';
        }
        return null;
    };

    const onReasonChange = (event) => {
        const { value } = event.target
        setReason(value);
    }

    return (

        <>
            <div className='container container-fluid my-5'>
                <h1 className='display-5 fw-bold'>Leave Requests</h1>
                <p>You have 3 leaves left for this month</p>

                <hr />

                <div className='my-5'> 

                    {/* <p>You c</p> */}

                    <div className='row'>

                        <div className="col-md-4 mb-5">
                            <p className='fw-bold'>Select Date:</p>

                            <Calendar
                                onChange={setSelectedDate}
                                value={selectedDate}
                                tileClassName={tileClassName}
                                onClickDay={handleTileClick}
                            />
                        </div>


                        <div className="col-md-8" style={{ "paddingLeft": "5%", "paddingRight": "5%" }}>

                            <div className='row'>
                                <div className="col-md-6">
                                    <p className='fw-bold mb-1'>Name:</p>
                                    <p className='text-muted'>{userData.e_name}</p>
                                </div>

                                <div className="col-md-6">
                                    <p className='fw-bold mb-1'>Emp Id:</p>
                                    <p className='text-muted m-0'>{userData.e_id}</p>
                                </div>

                            </div>

                            <p className='fw-bold mb-2 mt-3'>Selected date:</p>
                            <p className='border p-2 rounded-5'
                                style={{ "backgroundColor": "#6dfc9f", "display": "inline" }}>
                                {selectedDate.toDateString()}</p>

                            <p className='fw-bold mb-0 mt-5 mb-2'>Reason for Leave:</p>
                            <div className="form">
                                <textarea className="form-control" id="textAreaExample" rows="4" placeholder='Write reason here' style={{ "resize": "none" }} onChange={onReasonChange} text={reason}></textarea>
                                <button className='btn btn-primary my-3' onClick={handleFormSubmit}>Submit</button>

                            </div>

                        </div>
                    </div>

                </div>

                <div>

                </div>

            </div>

        </>
    );

}

export default LeaveRequest;
