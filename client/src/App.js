import React from 'react'
//import Dashboard from './common_components/Dashboard';
import WallpaperScreen from './user_src/WallpaperScreen';
import { Routes, Route} from 'react-router-dom'
import SignInScreen from './user_src/SignInScreen'; 
import SignUpScreen from './user_src/SignUpScreen';
import AnimationsScreen from './user_src/AnimationsScreen';
// import Dashboard from './user_src/Dashboard';
//import ChecklistScreen from './user_src/ChecklistScreen';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignInScreen/>}/>
        <Route path="/sign-up-screen" element={<SignUpScreen/>}/>
        <Route path="/wallpaper-screen" element={<WallpaperScreen/>}/>
        <Route path="/animations-screen" element={<AnimationsScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
