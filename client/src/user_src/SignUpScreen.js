import React from 'react'

function SignUpScreen() {
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
                <form className="form">
                    <div className="form-box">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="Enter Your First Name"/>
                    </div>
                    <div className="form-box">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Enter Your Last Name"/>
                    </div>
                    <div className="form-box">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Example@email.com"/>
                    </div>
                    <div className="form-box">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="At least 8 characters"/>
                    </div>
                    <div className="form-box">
                        <label>Re Enter Password</label>
                        <input type="password" className="form-control" placeholder="At least 8 characters"/>
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