import React, { useEffect, useState } from 'react'


export default function Schedule() {

  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const d = new Date();

  const timeout = setTimeout(() => {
    setDate(d.toLocaleDateString());
    setTime(d.toLocaleTimeString());
  }, 1000);

  useEffect(() => {



  })


  return (
    <>

      <div className='container container-fluid my-5'>

        <h3 className="display-5 fw-bold">Your Schedule</h3>
        <hr />

        <p className='fw-bold'>
          Today is: <span className='fw-normal'>{date}</span>
        </p>

        <p className='fw-bold'>
          Time:  <span className='fw-normal'>{time}</span>
        </p>


        <div className='my-5 border rounded-3 p-3'>

          <div className="row rounded-5 p-2">
            <div className="col-md-2">
              <div className="p-3 day-tab rounded-3" style={{ "width": "80%" }}>
                <h5 className="text-center m-0">Monday</h5>
              </div>
            </div>

            <div className="col-md-3"></div>
            <div className="col-md-3">
            </div>


            <div className="col-md-3">
              <div className="p-3 icu-tab">
                <div className="card-body">
                  <p className='m-0 text-center fw-bold'>Intesive Care Unit</p>
                </div>
              </div>
            </div>

            <hr className='my-2' />

          </div>

          <div className="row p-2">

            <div className="row">
              <div className="col-md-2">
                <div className="day-tab p-3 rounded-3" style={{ "width": "80%" }}>
                  <h5 className="text-center m-0">Tuesday</h5>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-3 radiology-tab">
                  <div className="card-body">
                    <p className='m-0 text-center fw-bold'>Radiology Room</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-3 or-tab">
                  <p className='m-0 text-center fw-bold'>Operating Room</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card p-0" style={{ "width": "100%" }}></div>

              </div>

            </div>

            <hr className='my-2' />

          </div>


          <div className="row p-2">

            <div className="row">
              <div className="col-md-2">
                <div className="p-3 day-tab rounded-3" style={{ "width": "80%" }}>
                  <h5 className="text-center m-0">Wednesday</h5>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-3 radiology-tab">
                  <div className="card-body">
                    <p className='m-0 text-center fw-bold'>Radiology Room</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>

            </div>

            <hr className='my-2' />

          </div>

          <div className="row p-2">

            <div className="row">
              <div className="col-md-2">

                <div className="day-tab p-3 rounded-3" style={{ "width": "80%" }}>
                    <h5 className="text-center m-0">Thursday</h5>
                </div>
              </div>

              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <div className="p-3 or-tab">
                  <div className="card-body">
                    <p className='m-0 text-center fw-bold'>Operating Room</p>

                  </div>
                </div>
              </div>

            </div>

            <hr className='my-2' />


          </div>


          <div className="row p-2">

            <div className="row">
              <div className="col-md-2">
                <div className="p-3 day-tab rounded-3" style={{ "width": "80%" }}>
                    <h5 className="text-center m-0">Friday</h5>
                
                </div>

              </div>

              <div className="col-md-3"></div>
              <div className="col-md-3">
                <div className="p-3 radiology-tab">
                  <div className="card-body">
                    <p className='m-0 text-center fw-bold'>Radiology Room</p>

                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>

            </div>
          </div>
        </div>


      </div>
    </>
  )
}
