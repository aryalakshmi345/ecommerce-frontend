import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'
import { registerAPI } from '../services/allApi'

function Register() {
  const navigate = useNavigate()
  const [user,setUser] = useState({
    name:"",email:"",password:"",phone:"",address:""
  })
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {name,email,password,phone,address}=user
        if(!name || !email || !password || !phone || !address){
            alert("Please Fill the form completely...!")
        }else{
          const res = await registerAPI(user)
          if(res.status==201){
            alert('Registered Succesfully')
            navigate('/login')
          }else{
            alert("Something went wrong")
          }
        }
      
  }
  return (
    <Layout>
        <div className='d-flex justify-content-center flex-column align-items-center w-100' style={{height:'80vh'}}>
          <h4 className='text-center'>REGISTER</h4>
          <form className='w-25' >
            <input type="text" placeholder='Enter Name' value={user.name} className='form-control mb-3' onChange={(e)=>setUser({...user,name:e.target.value})} required/>
            <input type="email" placeholder='Enter Email' value={user.email} className='form-control mb-3' onChange={(e)=>setUser({...user,email:e.target.value})} required/>
            <input type="password" placeholder='Enter Password' value={user.password} className='form-control mb-3' onChange={(e)=>setUser({...user,password:e.target.value})} required/>
            <input type="text" placeholder='Enter Phone' value={user.phone} className='form-control mb-3' onChange={(e)=>setUser({...user,phone:e.target.value})} required/>
            <input type="text" placeholder='Enter Address'value={user.address} className='form-control mb-3'onChange={(e)=>setUser({...user,address:e.target.value})} required/>
            <input onClick={handleSubmit} type="submit" className='btn btn-dark w-100' value={'REGSITER'}  />
          </form>
        </div>
    </Layout>
  )
}

export default Register