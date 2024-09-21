import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'
import { otpVerifyAPI, registerAPI } from '../services/allApi'
import ResendOtp from './REsendOTP'

function Register() {
  const [otp,setOtp] = useState('')
  const navigate = useNavigate()
  const [isVerified, setIsVerified] = useState(true);
  const [user,setUser] = useState({
    name:"",email:"",password:""
  })
  const [isOtpSent, setIsOtpSent] = useState(false);
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {name,email,password}=user
        if(!name || !email || !password){
            alert("Please Fill the form completely...!")
        }else{
          const res = await registerAPI(user)
          if(res.status==200){
            setIsOtpSent(true)
            alert(res.data.message)
          }else{
            alert("Something went wrong")
            console.log(res);
            
          }
        }
      
  }

// verify otp 
const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const email = user.email
        const res = await otpVerifyAPI(email,otp)
        alert(res.data.message);
        setIsVerified(true);
        navigate('/login')
    } catch (error) {
        alert(error.response.data.message);
    }
}

return (
    <Layout>
        <div className='d-flex justify-content-center flex-column align-items-center w-100' style={{height:'80vh'}}>
         
           {
            !isOtpSent?
            <>
             <h4 className='text-center'>REGISTER</h4>
             <form className='w-25'>
             <input type="text" placeholder='Enter Name' value={user.name} className='form-control mb-3' onChange={(e)=>setUser({...user,name:e.target.value})} required/>
              <input type="email" placeholder='Enter Email' value={user.email} className='form-control mb-3' onChange={(e)=>setUser({...user,email:e.target.value})} required/>
              <input type="password" placeholder='Enter Password' value={user.password} className='form-control mb-3' onChange={(e)=>setUser({...user,password:e.target.value})} required/>
              <input onClick={handleSubmit} type="submit" className='btn btn-dark w-100' value={'REGSITER'}  />
              </form>

           </>
           :
          <div className='p-5 border w-25 rounded d-flex justify-content-center align-items-center flex-column '>
            <h6 className='mb-4'>Verify Your Email Address</h6>
            <p>Enter the 4 digit OTP sent on {user.email}</p>
             <input
             type="text"
             name="otp"
             className='form-control mb-3'
             placeholder="Enter OTP"
             value={otp}
             onChange={(e) => setOtp(e.target.value)}
         />
         <button className='btn btn-dark mb-4' type="submit" onClick={handleVerifyOtp}>Verify OTP</button>
         <ResendOtp email={user.email} />
          </div>
           }
        </div>
    </Layout>
  )
}

export default Register