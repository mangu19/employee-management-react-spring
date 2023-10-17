import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Register from './Register';

export default function Login() {
    const navigate = useNavigate();
    const Click=()=>{
        console.log("Login");
    }
    const register = ()=>{
        navigate('/register');
    }

  return (
    < >
    <div className='container d-flex align-items-center justify-content-center my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded' style={{width:700}}>
        <div className='container'>
            <center><h1 className="display-6 mb-3">Employee Login</h1></center>
            <hr/>
        <div className='container' style={{width:550}}>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>

        </div>
            <center>
        <div className=" d-inline-flex" >
            <p className="lead">
                <button type="submit" onClick={Click} className="btn btn-outline-primary float-center mx-3">Sign in</button>
                <button onClick={register}   className='text-decoration-none btn btn-outline-success'>
                    New Employee 
                    </button>
             </p>
        </div>
            </center>
        </div>
        </div>
    </div>
    </>
  )
}
