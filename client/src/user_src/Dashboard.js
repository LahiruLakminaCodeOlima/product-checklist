import React from 'react'

function Dashboard() {
  return (
    <nav className="side-nav-bar">
        <div className="nav-bar-heading">
            <img src="/" alt="Logo" className="nav-bar-heading-img"/>
            <p className='nav-bar-heading-text'>CHECKLIST</p>
        </div>
        <div className='nav-bar-nav-boxes'>
            <div className='nav-bar-nav-box'>
                <button className='nav-bar-nav-boxes-items'>All</button>
                <button className='nav-bar-nav-boxes-items'>Men</button>
                <button className='nav-bar-nav-boxes-items'>Women</button>
            </div>
            <div className='nav-bar-nav-box'>
                <button className='nav-bar-nav-boxes-items'>T-Shirt</button>
                <button className='nav-bar-nav-boxes-items'>Denim Jeans</button>
                <button className='nav-bar-nav-boxes-items'>Short</button>
                <button className='nav-bar-nav-boxes-items'>Blouse</button>
                <button className='nav-bar-nav-boxes-items'>Skirt</button>
                <button className='nav-bar-nav-boxes-items'>Frock</button>
            </div>
        </div>
    </nav>
  )
}

export default Dashboard