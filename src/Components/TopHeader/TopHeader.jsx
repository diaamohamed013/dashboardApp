import React from 'react'
import '../TopHeader/TopHeader.scss'
import userImg from '../../assests/images/portrait.png'

export default function TopHeader() {
    return (
        <div className='dashboard'>
            <div className="userBar">
                <div className="search">
                    <i className='fas fa-search'></i>
                    <label>
                        <input type="text" placeholder='Search or type' className='searchInp' />
                    </label>
                </div>
                <div className="userInfo">
                    <div className="userIcon">
                        <i className='far fa-bell'></i>
                    </div>
                    <img src={userImg} alt="user" />
                </div>
            </div>
        </div>
    )
}
