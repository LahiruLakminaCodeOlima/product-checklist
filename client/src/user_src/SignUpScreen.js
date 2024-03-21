import React, { useState }  from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUpScreen() {
    const [formValues, setFormValues] = useState([{first_name:'',last_name:'',email:'',password:''}]);
    const [rePassword, setRePassword] = useState();
    const[errorMassage, setErrorMassage] = useState('');
    const navigate = useNavigate();

    function handleSubmit (e){
        e.preventDefault();
        if(formValues.password===rePassword){
            axios.post('http://localhost:3001/api/v1/users/new',{...formValues})
            .then(res=>{
                console.log(res);
                navigate('/')
            }).catch(err=>console.log(err));
        }
        else{
            setRePassword('');
            setErrorMassage("Password is worn Reenter password!")
        }
    }
    return (
    <div className="login-container">
        <div className="register-image-box">
            <img src="/slide_images/sign_imag.png" alt="/" style={{width:'400px',borderRadius:"30px"}} className="register-image"/>
        </div>
        <div className="register-box">
            <div className="description-box">
                <h1>Create a new Account</h1>
                <p>
                    Today is a new day. It's your day. You shape it.<br/>
                    Sign in to start buy your items as you want.
                </p>
            </div>
            <div>
                <form className="from-group form needs-validation" onSubmit={handleSubmit}>
                    <div className="form-box">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            name="first_Name"
                            id="first_Name"
                            className="form-control"
                            placeholder="Enter Your First Name"
                            required
                           onChange={(e)=>{setFormValues({...formValues, first_name:e.target.value})}}
                        />
                    </div>
                    <div className="form-box">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Enter Your Last Name"
                            required
                            onChange={(e)=>{setFormValues({...formValues, last_name:e.target.value})}}
                        />
                    </div>
                    <div className="form-box">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Example@email.com"
                            required
                            onChange={(e)=>{setFormValues({...formValues, email:e.target.value})}}
                        />
                    </div>
                    <div className="form-box">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            className="form-control" 
                            placeholder="At least 8 characters"
                            required
                            onChange={(e)=>{setFormValues({...formValues, password: e.target.value})}}
                        />
                    </div>
                    <div className="form-box">
                        <label htmlFor="reEnterPassword">Re Enter Password</label>
                        <input
                            type="password"
                            name="reEnterPassword"
                            className="form-control"
                            placeholder="At least 8 characters"
                            required
                            onChange={(e)=>{setRePassword(e.target.value)}}
                        />
                        <div style={{color:"red"}}>
                        {errorMassage}
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="SIGN UP" className="sign-btn"/>
                    </div>
                </form>
                
                <div className="bottom-text-box">
                    <p className="bottom-text">&copy; 2024 All RIGHTS RESERVED</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpScreen