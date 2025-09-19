import React, { useState } from 'react'
import './LoginSignup.css'


export const LoginSignup = () => {

  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Done");
    }
  }

  const validate = () => {
    const error = {};

    if (!email) {
      error.email = "Email is Required";
    }
    else if (/\S+@\S+\.\S+/.test(email)) {
      error.email = "Please Enter Vaild Email";
    }
    else {
      error.email = "";
    }

    if (!fullname) {
      error.fullname = "Full Name is Required";
    }
    else if (/^[a-zA-Z\s]*$/.test(fullname)) {
      error.fullname = "Please Enter Vaild Fullname";
    }
    else {
      error.fullname = "";
    }

    if (!password) {
      error.password = "Password is Required";
    }
    else if (password.length < 8) {
      error.password = "Password must be at least 8 characters";
    }
    else {
      error.password = "";
    }

    return error;
  }
  return (
    <div className='container'>
      <div className='Signup'>

        <div className='Part1'>
          <div className='Logo'>
            <img className="img-top" src="logo.png" alt="Card_image" />
          </div>
          <div className='Logotext'>
            <p className='textlogo'>
              Say hello to global food and beverage producers and suppliers, all in one place
            </p>
          </div>
        </div>

        <div className='Part2'>

          <div className='fromdiv1'>
            <p>Let’s get started </p>
            <p>with a few simple steps</p>
          </div>

          <div className='form_container'>

            <form onSubmit={handleSubmit}>

              <div className='forbody'>

                <div className='form-group'>
                  <label className="labelname" htmlFor='email'>Email</label>
                  <input className= "inputlistname" type='email' onChange={(e) => setEmail(e.target.value)} />
                  {errors.email && <div className='error'>{errors.email}</div>}
                </div>

                <div className='form-group'>
                  <label className="labelname" htmlFor='fullname'>Fullname</label>
                  <input className= "inputlistname" type='text' onChange={(e) => setFullName(e.target.value)} />
                  {errors.fullname && <div className='error'>{errors.fullname}</div>}
                </div>

                <div className='form-group'>
                  <label className="labelname"  htmlFor='password'>Password</label>
                  <input className= "inputlistname" type='password' onChange={(e) => setPassword(e.target.value)} />
                  {errors.password && <div className='error'>{errors.password}</div>}
                </div>

              </div>
              
              <div className='form-button'>
                <button className='formbtn1'>Sign Up</button>
              </div>
              
            </form>

          </div>

          <div className='fromdiv3'>
            <div className='div3text'>By signing up, you agree to our<span className='div3text1'>Terms of Service</span>.</div>
            <div className='div3text'>Already have an account? <span className='div3text2'>Log in</span></div>
          </div>

        </div>
      </div>
    </div>
  )
}
