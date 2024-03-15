import React from 'react'
import { Link } from 'react-router-dom'

function SignInScreen() {
  return (
    <div className="login-container">
        <div className="login-box">
            <div className="description-box">
                <div className="description-box-herding" >
                    <h1>Welcome Back</h1>
                    <img src="/slide_images/Waving_hand_emoji.PNG.png" alt="" style={{height:"30px"}} />
                </div>
                <p>
                    Today is a new day. It's your day. You shape it.<br/>
                    Sign in  to start managing your project.
                </p>
            </div>
            <div>
                <form className="form">
                    <div className="form-box">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Example@email.com"/>
                    </div>
                    <div className="form-box">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="At least 8 characters"/>
                    </div>
                    <div className="forgo-password-box">
                        <a href="/" className="forgo-password-link">Forgot Password?</a>
                    </div>
                    <div>
                        <input type="submit" value="SIGN IN" className="sign-btn"/>
                    </div>
                    <div>
                        <div className="or-line-box">
                           <div className="or-line">
                           </div>
                            <div  className="or-box">
                              <p>Or</p>
                           </div>
                        </div>
                    </div>
                </form>
                <div className="account-sign-box">
                    <div className="account-sign-item">
                        <img src="/slide_images/google_sign_in.png" alt="" className="account-sign-image"/>
                        <p>Sign in with Google</p>
                    </div>
                    <div className="account-sign-item">
                        <img src="/slide_images/facebook_sign_in.png" alt="/" className="account-sign-image"/>
                        <p>Sign in with Facebook</p>
                    </div>
                </div>
                <div className="sign-up-box">
                    <p>Don't You have an account?<Link to="/SignUpScreen" className="sign-up-link">Sign up</Link></p>
                </div>
                <div className="bottom-text-box">
                    <p className="bottom-text">&copy; 2024 All RIGHTS RESERVED</p>
                </div>
            </div>
        </div>
        <div className="login-image-box">
            <img src="/slide_images/sign_imag.png" alt="/" style={{width:'400px',borderRadius:"30px"}} className="login-image"/>
        </div>
    </div>
  )
}

export default SignInScreen