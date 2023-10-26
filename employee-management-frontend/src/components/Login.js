import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleLogin = () => {
        fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then((response) => {
            if (response.status === 200) {
                console.log("Login success")
                
            } else {
                // Authentication failed, handle the error response
                console.log("Login failed")
            }
        })
        .catch((error) => {
            // Handle network error
        });
    };
    
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
            <input type="email" className="form-control" name='email' id="floatingInput" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" name='password' id="floatingPassword" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>

        </div>
            <center>
        <div className=" d-inline-flex" >
            <p className="lead">
                <button type="submit" onClick={handleLogin} className="btn btn-outline-primary float-center mx-3">Sign in</button>
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
