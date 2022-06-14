import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './logout.css'




//page displayed after clicking logout -> contains link to login page


const Logout = () => {

    //clears local storage when this page loads
    useEffect(()=>{
        localStorage.clear();
    },[])


  return (
    <div className='logout-cont'>
        <h1>Thank you</h1>
        
        <button><Link className="link" to="/login">Login again</Link></button>
    </div>
    )
}

export default Logout
