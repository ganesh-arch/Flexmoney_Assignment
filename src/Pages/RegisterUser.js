import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import{AiFillMail} from 'react-icons/ai'

import {validateEmail,loginExisting} from '../Functions/functions.js'
function RegisterUser() {
    const [batch, setbatch] = useState()
    const [email, setemail] = useState()
    const batches=['6 - 7 AM','7 - 8 AM','8 - 9 AM','5 - 6 PM']

    const handleLogin=()=>{
        var err=''
        
        
        if(!validateEmail(email))err+='email is not a valid one\n'
        if(batch===undefined)err+='batch is not valid\n'

        if(err.length===0){
            const date = new Date();

        // let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        loginExisting([email,batch,month,year])

        }
        else{
            alert('There was some error in form filling :-\n'+err)
        }
    }
  return (
    <>
             <div className="i1 input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><AiFillMail/></span>
                <input type="email" onChange={(e)=>setemail(e.target.value)} className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>


            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Select the Batch</span>
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{batch===undefined?'No Batch Selected':batch}</button>
                <ul className="dropdown-menu dropdown-menu-end">
                    {
                        batches.map((id,val)=>{
                            return (
                                <li onClick={()=>setbatch(id)} key={val}>{id}</li>
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

                    <div>  <Link to='/'>New User?</Link></div>
                </div>
                <div className='col'>
                    <div>
                        <button type="button" onClick={handleLogin} className="btn btn-primary">Payment</button>
                    </div>
                </div>
            </div>



        </>
  )
}

export default RegisterUser