import React from 'react'
import Dashboard from '../common_components/Dashboard'

function WallpaperScreen() {
  return (
    <div>
        <Dashboard/>
        <div className="wallpaper-content">
            <img src="/" alt="" className="main-image"/>
            <div className="checklist-content">
                <div className="checklist-item">
                    <p>a</p>
                </div>
                <div className="checklist-item">
                    <p>b</p>
                </div>
                <div className="checklist-item">
                    <p>c</p>
                </div>
                <div className="checklist-item">
                    <p>d</p>
                </div>
                <div className="checklist-item" style={{height:'100px'}}>
                    <p>f</p>
                </div>
                <div className="checklist-item">
                    <p>d</p>
                </div>
                <div className="checklist-item">
                    <p>d</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WallpaperScreen