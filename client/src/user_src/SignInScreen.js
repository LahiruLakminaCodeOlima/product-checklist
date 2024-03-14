import React from 'react'

function SignInScreen() {
  return (
    <div className="login-container">
        <div className="login-box">
            <div className="description-box">
                <h1>Welcome Back</h1>
                <p>
                    Today is a new day. It's your day. You shape it.<br/>
                    Sign in  to start managing your project.
                </p>
            </div>
            <div>
                <form className="form">
                    <div className="form-box">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="yourMale@gmail.com"/>
                    </div>
                    <div className="form-box">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="or-line-box">
                        <div className="forgo-password-box">
                            <a href="/" className="forgo-password-link">Forgot Password?</a>
                        </div>
                        <div  className="or-box">
                            <p>Or</p>
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="SIGN IN" className="sign-btn"/>
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
                    <p>Don't You have an account?<a href="/" className="sign-up-link">Sign up</a></p>
                </div>
                <div className="bottom-text-box">
                    <p className="bottom-text">&copy; 2024 All RIGHTS RESERVED</p>
                </div>
            </div>
        </div>
        <div className="image-box">
            <img src="/slide_images/sign_imag.png" alt="/" style={{width:'500px'}}/>
        </div>
    </div>
  )
}

export default SignInScreen