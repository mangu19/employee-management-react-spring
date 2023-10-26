import React from 'react'
import selfImg from './selfImg.jpg'
export default function Profile() {
  return (
    <>
        <div class='container my-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded' style={{width:700}}>
            <center><h1 className='display-6'>Profile</h1><br/></center><hr/>
            <div className='container d-flex position-relative'>
                <blockquote class="blockquote">
                    <p>Mangesh Sawant</p>
                    <p><em>mangeshsawant608@gmail.com</em></p>
                    <p>Malegaon (Nashik) 423201</p>
                    <p><b>Degree:</b> BCA</p>
                </blockquote>
               
                <div className='position-absolute top-0 end-0'>
                <img src={selfImg} class="mx-3 img-thumbnail float-end" alt="abc" style={{width:100,height:120}}/>
                </div>
            </div>
            <div className='align-text-top '>

                <button type='button' className='btn  btn-success '>Update</button>
                <button type='button' className='btn  btn-danger  mx-3'>Logout</button>
                
            </div>
        </div>
    
    
    </>
  )
}
