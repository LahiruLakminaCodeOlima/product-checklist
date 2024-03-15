import React from 'react'

function Dashboard() {
  return (
    <div>
        <nav className="nav-bar">
            <div className="nav-bar-top">
                <img src="/slide_images/logo.png" alt="" className="logo"/>
                <div className='search-box'>
                    <img src="/slide_images/search-interface.png" alt="" className="search-icon"/>
                    <input type="text" placeholder="Search" className='search'/>
                </div>
                <a href="/"><img src="/slide_images/profile.png" alt="" className="profile"/></a>
            </div>
            <div className='nav-bar-bottom'>
                <ul className="nav-bar-bottom-item">
                    <li className="nav-bar-link-item link-item-animation link-item-active"><a href="/" className="nav-bar-link">Wallpaper</a></li>
                    <li className="nav-bar-link-item link-item-animation link-item-animation-work link-item-active"><a href="/" className="nav-bar-link">Animations</a></li>
                    <li><a href="/" className="nav-bar-link">Notifications</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Dashboard