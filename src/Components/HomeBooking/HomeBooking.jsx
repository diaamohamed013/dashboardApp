import React from 'react'
import Booking from '../Booking/Booking'
import NavBar from '../NavBar/NavBar'

export default function HomeBooking() {
    return (
        <div className='home'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-12">
                        <NavBar/>
                    </div>
                    <div className="col-lg-10 col-md-12">
                        <Booking />
                    </div>
                </div>
            </div>
        </div>
    )
}
