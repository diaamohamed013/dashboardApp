import React , {useState} from 'react'
import porcheCar from '../../assests/images/car.png'
import miniCoperCar from '../../assests/images/mini-cooper.png'
import suzukiCar from '../../assests/images/suzuki.png'
import '../Dashboard/Dashboard.scss'
import TopHeader from '../TopHeader/TopHeader'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BarChart from '../BarChart/BarChart'
import LineChart from '../LineChart/LineChart'
import { UserData } from "../UserChartData/UserData.js";

export default function Dashboard() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Miles",
                data: UserData.map((data) => data.miles),
                backgroundColor: [
                    "#F4F5F9",
                    "#2884FF"
                ]
            },
        ],
    });

    const [userDataLine, setUserDataLine] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Cars",
                data: UserData.map((data) => data.cars),
                backgroundColor: "#ff764c2e",
                borderColor: "#ff764c2e",
                fill:'start'
            },
        ],
    });

    return (
        <>
            {/* for search bar and notifications */}
            <TopHeader />

            <div className='booking'>

                {/* for progress bars */}
                <div className="progressbard">
                    <div className="row g-4 justify-content-center align-items-center">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="progrssbars-item progress1">
                                <div className="top">
                                    <div className="top-icon">
                                        <i className='fas fa-bolt'></i>
                                    </div>
                                    <h3>
                                        Energy
                                    </h3>
                                </div>
                                <div className="card-bottom">
                                    <CircularProgressbar
                                        value={45}
                                        text={`${45} %`}
                                        circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                                        styles={{
                                            trail: {
                                                strokeLinecap: 'butt',
                                                transform: 'rotate(-126deg)',
                                                transformOrigin: 'center center',
                                                stroke: "#f4f5f95e"
                                            },
                                            path: {
                                                strokeLinecap: 'butt',
                                                transform: 'rotate(-126deg)',
                                                transformOrigin: 'center center',
                                                stroke: `rgb(255, 255, 255)`,
                                            },
                                            text: {
                                                fill: '#FFFFFF',
                                                fontSize: '24px'
                                            }
                                        }}
                                        strokeWidth={8}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="progrssbars-item progress-bg progress2">
                                <div className="top">
                                    <div className="top-icon">
                                        <i className='fas fa-arrows-up-down'></i>
                                    </div>
                                    <h3>
                                        Range
                                    </h3>
                                </div>
                                <div className="card-bottom">
                                    <CircularProgressbar
                                        value={50}
                                        text={`${'157k'} %`}
                                        circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                                        styles={{
                                            trail: {
                                                strokeLinecap: 'butt',
                                                transform: 'rotate(-126deg)',
                                                transformOrigin: 'center center',
                                                stroke: "#F4F5F9"
                                            },
                                            path: {
                                                strokeLinecap: 'butt',
                                                transform: 'rotate(-126deg)',
                                                transformOrigin: 'center center',
                                                stroke: `#FF7E86`,
                                            },
                                            text: {
                                                fill: '#242731',
                                                fontSize: '24px'
                                            }
                                        }}
                                        strokeWidth={8}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="progrssbars-item progress-bg progress3">
                                <div className="top">
                                    <div className="top-icon">
                                        <i className='fas fa-droplet'></i>
                                    </div>
                                    <h3>
                                        Break fluid
                                    </h3>
                                </div>
                                <div className="card-bottom">
                                    <CircularProgressbar
                                        value={9}
                                        text={`${9} %`}
                                        circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                                        styles={{
                                            trail: {
                                                strokeLinecap: 'butt',
                                                transform: 'rotate(-126deg)',
                                                transformOrigin: 'center center',
                                                stroke: "#F4F5F9"
                                            },
                                            path: {
                                                strokeLinecap: 'butt',
                                                transform: 'rotate(-126deg)',
                                                transformOrigin: 'center center',
                                                stroke: `#A162F7`,
                                            },
                                            text: {
                                                fill: '#242731',
                                                fontSize: '24px'
                                            }
                                        }}
                                        strokeWidth={8}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="progrssbars-item progress-bg progress4">
                                <div className="top">
                                    <div className="top-icon">
                                        <i className='fas fa-clock'></i>
                                    </div>
                                    <h3>
                                        Tire Wear
                                    </h3>
                                </div>
                                <div className="card-bottom">
                                    <CircularProgressbar
                                        value={25}
                                        text={`${25} %`}
                                        circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                                        styles={{
                                            trail: {
                                                strokeLinecap: 'butt',
                                                transform: 'rotate(-126deg)',
                                                transformOrigin: 'center center',
                                                stroke: "#F4F5F9"
                                            },
                                            path: {
                                                strokeLinecap: 'butt',
                                                transform: 'rotate(-126deg)',
                                                transformOrigin: 'center center',
                                                stroke: `#F6CC0D`,
                                            },
                                            text: {
                                                fill: '#242731',
                                                fontSize: '24px'
                                            }
                                        }}
                                        strokeWidth={8}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* for chart cards */}
                <div className="row g-3 mb-4">
                    <div className="col-lg-6">
                        <div className="chart">
                            <h2>
                                Miles <span>Statistics</span>
                            </h2>
                            <div className="chart-middle">
                                <div className="chart-middle-toggle">
                                    <div className="toggle toggle-blue">
                                        <span>
                                            Day
                                        </span>
                                    </div>
                                    <div className="toggle toggle-blue">
                                        <span>Week</span>
                                    </div>
                                    <div className="toggle toggle-blue">
                                        <span>Month</span>
                                    </div>
                                </div>
                                <span>
                                    256 Miles
                                </span>
                            </div>
                            <div className="chart-bottom w-100">
                                <BarChart chartData={userData} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="chart">
                            <h2>
                                Car <span>Statistics</span>
                            </h2>
                            <div className="chart-middle">
                                <span>
                                    20 February 2022
                                </span>
                                <div className="chart-middle-toggle">
                                    <div className="toggle toggle-orange">
                                        <span>
                                            Day
                                        </span>
                                    </div>
                                    <div className="toggle toggle-orange">
                                        <span>Week</span>
                                    </div>
                                    <div className="toggle toggle-orange">
                                        <span>Month</span>
                                    </div>
                                </div>
                            </div>
                            <div className="chart-bottom w-100">
                                <LineChart chartData={userDataLine}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* for 3 cards of car */}
                <div className="row g-4 justify-content-center align-items-center">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="cards-item bg-1">
                            <div className="item-top">
                                <i className='fas fa-rotate'></i>
                                <p>
                                    64% Recommend
                                </p>
                            </div>
                            <div className="item-img text-center w-100">
                                <img src={porcheCar} alt="car" />
                            </div>
                            <h3>
                                Mini Cooper
                            </h3>
                            <div className="item-bottom  w-100">
                                <div className="bottom-service">
                                    <div className="service">
                                        <i className='fas fa-repeat'></i>
                                        <span>132k</span>
                                    </div>
                                    <div className="service">
                                        <i className='far fa-sun'></i>
                                        <i className='fas fa-bolt'></i>
                                    </div>
                                </div>
                                <div className="bottom-price">
                                    <span>$32/h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="cards-item bg-2">
                            <div className="item-top">
                                <i className='fas fa-rotate'></i>
                                <p>
                                    64% Recommend
                                </p>
                            </div>
                            <div className="item-img text-center w-100">
                                <img src={miniCoperCar} alt="car" />
                            </div>
                            <h3>
                                Porsche 911 Carrera
                            </h3>
                            <div className="item-bottom  w-100">
                                <div className="bottom-service">
                                    <div className="service">
                                        <i className='fas fa-repeat'></i>
                                        <span>132k</span>
                                    </div>
                                    <div className="service">
                                        <i className='far fa-sun'></i>
                                        <i className='fas fa-bolt'></i>
                                    </div>
                                </div>
                                <div className="bottom-price">
                                    <span>$32/h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="cards-item bg-3">
                            <div className="item-top">
                                <i className='fas fa-rotate'></i>
                                <p>
                                    64% Recommend
                                </p>
                            </div>
                            <div className="item-img text-center w-100">
                                <img src={suzukiCar} alt="car" />
                            </div>
                            <h3>
                                Porsche 911 Carrera
                            </h3>
                            <div className="item-bottom  w-100">
                                <div className="bottom-service">
                                    <div className="service">
                                        <i className='fas fa-repeat'></i>
                                        <span>132k</span>
                                    </div>
                                    <div className="service">
                                        <i className='far fa-sun'></i>
                                        <i className='fas fa-bolt'></i>
                                    </div>
                                </div>
                                <div className="bottom-price">
                                    <span>$32/h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
