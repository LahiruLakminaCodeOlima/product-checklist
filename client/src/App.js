import React from 'react'
import { Routes, Route} from 'react-router-dom'
import SignInScreen from './user_src/SignInScreen'; 
import SignUpScreen from './user_src/SignUpScreen';
//import Dashboard from './user_src/Dashboard';
//import ChecklistScreen from './user_src/ChecklistScreen';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignInScreen/>}/>
        <Route path="/SignUpScreen" element={<SignUpScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
