import React, {useEffect, useState} from 'react'
import Dashboard from '../common_components/Dashboard'

function AnimationsScreen() {

    const [animation, setAnimation] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/api/v1/animation')
        .then(res=> res.json(res))
        .then(data=> setAnimation(data))
        .catch(err=> console.error(err))
    },[])

  return (
    <div>
        <Dashboard/>
        <div className="wallpaper-content">
            <div  className="main-image-box">
                <img src="/animation/header-animation/main-animation-02.gif" alt="" className='main-image'/>
            </div>
            <div className="checklist-content">
            {animation.map((index)=>(
                <img src={`/animation/animations/${index.name}`}alt='' className="checklist-image" />
            ))} 
            </div>
        </div>
    </div>
  )
}

export default AnimationsScreen