import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import NavBar from '../NavBar/NavBar'

export default function HomeDashboard() {
    return (
        <div className='home'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-12">
                        <NavBar />
                    </div>
                    <div className="col-lg-10 col-md-12">
                        <Dashboard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
