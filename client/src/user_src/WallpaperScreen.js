import React, {useEffect, useState} from 'react'
import Dashboard from '../common_components/Dashboard'

function WallpaperScreen() {
    const [wallpaper, setWallpaper] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/api/v1/wallpapers')
        .then(res=> res.json(res))
        .then(data=> setWallpaper(data))
        .catch(err=> console.error(err))
    },[])

    return (
    <div>
        <Dashboard/>
        <div className="wallpaper-content">
            <div  className="main-image-box">
                <img src="/wallpaper/header-wallpaper/main-wallpaper-05.jpg" alt="" className='main-image'/>
            </div>
            
            <div className="checklist-content">
            {wallpaper.map((index)=>(
                <img src={`/wallpaper/wallpapers/${index.name}`}alt='' className="checklist-image" />
            ))} 
            </div>
            
        </div>
    </div>
  )
}

export default WallpaperScreen