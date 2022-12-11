import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import{AiFillMail} from 'react-icons/ai'
import {BsFillPersonFill,BsFillTelephoneFill} from 'react-icons/bs'
import { validateAge, validateEmail, validateName, validatePhone, sendData } from '../Functions/functions.js'
function NewUser() {
    const batches = ['6 - 7 AM', '7 - 8 AM', '8 - 9 AM', '5 - 6 PM']
    const [batch, setbatch] = useState()
    const [email, setemail] = useState()
    const [name, setname] = useState()
    const [age, setage] = useState()
    const [phone, setphone] = useState()


    const handleNameChange = (b) => {

        setname(b);
    }
    const handleEmailChange = (b) => {
        setemail(b)
    }
    const handleAgeChange = (b) => {
        setage(b)
    }
    const handlePhoneChange = (b) => {
        setphone(b)
    }
    const handleSubmit = () => {
        var err = ''

        if (!validateEmail(email)) {
            err += 'Email is Not valid\n'
        }

        if (!validateName(name)) {
            err += 'Name is not valid\n'
        }

        if (!validateAge(age)) {
            err += 'Age must lie between 18 and 65\n'
        }

        if (!validatePhone(phone)) {
            err += 'Phone Number must be of 10 digits and must not contain alphabets\n'
        }
        if (err.length === 0) {
            const date = new Date();

            
            // let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            
            sendData([email, name, phone, age, batch,month,year])
            
        }
        else alert('There were some errors in the filling of form:-\n' + err)
    }
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><AiFillMail/></span>
                <input type="email" onChange={(e) => handleEmailChange(e.target.value)} className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            {/* <div style={(changedName)?{display:'block'}:{display:'none'}} className='err'>*Name has an error, please resolve</div> */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><BsFillPersonFill/></span>
                <input type="text" className="form-control" onChange={(e) => handleNameChange(e.target.value)} placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><BsFillTelephoneFill/></span>
                <input type="phone" className="form-control" onChange={(e) => handlePhoneChange(e.target.value)} placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">18+</span>
                <input type="phone" className="form-control" onChange={(e) => handleAgeChange(e.target.value)} placeholder="Age" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Select the Batch</span>
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{batch === undefined ? 'No Batch Selected' : batch}</button>
                <ul className="dropdown-menu dropdown-menu-end">
                    {
                        batches.map((id, val) => {
                            return (
                                <li onClick={() => setbatch(id)} key={val}>{id}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Fees</span>
                <input disabled type="phone" className="form-control" placeholder='₹ 500.0' aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className='row'>
                <div className='col'>

                    <div>  
                        <button type="button" class="btn btn-warning">
                        <Link to='/Login'>Already a User?</Link></button></div>
                </div>
                <div className='col'>
                    <div>
                        <button type="button" onClick={handleSubmit} class="btn btn-warning">Payment</button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default NewUser