import React from 'react'
import { Link, useResolvedPath, useMatch} from 'react-router-dom';
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
                    <CustomLink to="/wallpaper-screen">Wallpaper</CustomLink>
                    <CustomLink to="/animations-screen">Animations</CustomLink>
                    <li><Link to="/notification-screen" className="nav-bar-link">Notifications</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Dashboard

function CustomLink({path, children, ...props}) {
        const resolvedPath=useResolvedPath(path)
        const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={`nav-bar-link-item link-item-animation  ${isActive === path ?"link-item-active":''} link-item-animation-work`}>
            <Link to='' className="nav-bar-link" {...props}>{children}</Link>
        </li>
    )
}