import React from 'react'
import './Booking.scss'
import dataCars from './data'
import TopHeader from '../TopHeader/TopHeader'
// import Cards from './Cards'

export default function Booking() {
    return (
        <>
            {/* for search bar and notifications */}
            <TopHeader />

            <div className="dashboard-content">
                <h2>
                    Booking
                </h2>

                {/* for filters icons */}
                <div className="filter">
                    <div className="filter-options">
                        <label>
                            New
                            <i className="fa-solid fa-caret-down"></i>
                        </label>
                        <label>
                            Toyota
                            <i className="fa-solid fa-caret-down"></i>
                        </label>
                    </div>
                    <div className="filter-icon">
                        <div className="icon">
                            <i className='fas fa-qrcode'></i>
                        </div>
                        <div className="icon">
                            <i className='fas fa-sliders'></i>
                        </div>
                    </div>
                </div>

                {/* for cards of cars */}
                <div className="row gy-4">
                    {
                        dataCars.map((item, index) =>
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="car-card">
                                    <div className="car-card-top w-100">
                                        <h3>
                                            {item.name}
                                        </h3>
                                        <div className="top-icon">
                                            <i className='fas fa-heart'></i>
                                        </div>
                                    </div>
                                    <p>
                                        {item.subName}
                                    </p>
                                    <div className="card-card-img w-100 text-center">
                                        <img src={item.imgSrc} alt="car" />
                                    </div>
                                    <div className="card-car-bottom w-100">
                                        <div className="bottom-service">
                                            <div className="service">
                                                <i className='far fa-user'></i>
                                                <span>{item.noUser}</span>
                                            </div>
                                            <div className="service">
                                                <i className='fas fa-repeat'></i>
                                                <span>{item.type}</span>
                                            </div>
                                        </div>
                                        <div className="bottom-price">
                                            <p>
                                                {item.price}
                                                <span>{item.days}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>

            </div>
        </>

    )
}
