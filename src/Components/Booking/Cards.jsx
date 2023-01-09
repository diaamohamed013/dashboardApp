import React from 'react'

export default function Cards({ item }) {
    return (
        <>
            <div className="col-lg-4 col-md-6">
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
                        <img src={item.imgSrc} alt="car"/>
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
        </>

    )
}
