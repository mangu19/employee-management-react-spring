import React, { useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        photoFile: null,
        address: '',
        city: '',
        zip: '',
        degree: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;

        if (type === 'file') {
            setUser({ ...user, [name]: e.target.files[0] });
        } else {
            setUser({ ...user, [name]: value });
        }
        console.log(user.email)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare a FormData object for file uploads
        const formData = new FormData();
        for (const key in user) {
            formData.append(key, user[key]);
        }

        // Send the formData to your backend or perform other actions
        // Example using the fetch API:
        fetch('https://localhost:8080/api/users/register', {
            method: 'POST',
            body: formData,
        })
            .then(res=> res.json())
            .then((response) => {
                alert("Inserted");
            })
            
            .catch((error) => {
                console.log("err"+error)
            });
    };
    
            const login= ()=>{
                navigate('/');
            }  
   
    
    return (
        <>
        
        <div className='container d-flex align-items-center justify-content-center my-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded' style={{width:700}}>

            <div className='container '>
            <center><h1 className="display-6 mb-3">Employee Registraition</h1></center>
                <hr/>
                <form class="row g-3" onSubmit={handleSubmit}>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"   onChange={handleInputChange} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4"   onChange={handleInputChange}/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="inputName"   onChange={handleInputChange} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPhoto" class="form-label">Photo</label>
                        <input type="file" class="form-control" accept='image/*' id="inputPhoto" onChange={handleInputChange}/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"  onChange={handleInputChange}/>
                    </div>
                  
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" onChange={handleInputChange}/>
                    </div>
                    
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip" onChange={handleInputChange}/>
                    </div>
                    <div class="col-md-4">
                    <label for="inputDegree" class="form-label">Degree</label>
                        <input type="text" class="form-control" id="inputDegree"  onChange={handleInputChange}/>
                    </div>
                   
                    <div class="col-12 mb-3">
                        <button type="submit" class="btn btn-outline-primary mx-3">Sign in</button>
                        <button onClick={login}   className='text-decoration-none btn btn-outline-success'>
                        Login 
                        </button>
                    </div>
                </form>

            </div>
        </div>

        </>
    )
}
