import React from 'react'

export default function Login() {
    const Click=()=>{
        console.log("Login");
    }
  return (
    < >
    <div className='position-absolute top-50 start-50 translate-middle my-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded' style={{width:700}}>
        <div className='container'>
            <center><h1 className="display-6 mb-3">Employee Login</h1></center>
            <hr/>
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
            <button type="submit" onClick={Click} className="btn btn-outline-primary mx-3">Sign in</button>
                <a href='#' className='text-decoration-none btn btn-outline-success'>
                    New Employee 
                </a>
            </p>
        </div>
            </center>
        </div>
    </div>
    </>
  )
}
