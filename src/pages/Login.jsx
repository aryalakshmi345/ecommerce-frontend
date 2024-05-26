import React, { useState } from 'react'
import Layout from '../components/Layout'
import { loginAPI } from '../services/allApi'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'

function Login() {
    const [auth,setAuth]= useAuth()
    const [user,setUser] = useState({
        email:'',password:''
    })
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin=async(e)=>{
        e.preventDefault()
        const {email,password} = user
        if(!email || !password){
            alert('Please fill the form completely')
        }else{
            const result = await loginAPI(user)
            if(result.status==200){
                alert('login successful')
                setAuth({
                    ...auth,
                    user:result.data.user,
                    token: result.data.token
                })
                sessionStorage.setItem('auth',JSON.stringify(result.data))
                navigate(location.state || '/')
            }else{
                alert("Incorrect username or password")
            }
        }
    }
  return (
    <Layout>
        <div>
        <div className='d-flex justify-content-center flex-column align-items-center w-100' style={{height:'80vh'}}>
          <h4 className='text-center'>LOGIN</h4>
          <form className='w-25' >
            <input type="email" placeholder='Enter Email' value={user.email} className='form-control mb-3' onChange={(e)=>setUser({...user,email:e.target.value})} required/>
            <input type="password" placeholder='Enter Password' value={user.password} className='form-control mb-3' onChange={(e)=>setUser({...user,password:e.target.value})} required/>
            <input onClick={handleLogin} type="submit" className='btn btn-dark w-100' value={'LOGIN'}  />
          </form>
        </div> 
        </div>
    </Layout>
  )
}

export default Login