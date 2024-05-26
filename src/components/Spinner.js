import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Spinner({path = "login"}) {
    const [count,setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        const inetrval = setInterval(()=>{
            setCount((prevVaalue) => --prevVaalue)
        },1000)
        count === 0 && navigate(`/${path}`,{
            state: location.pathname
        })
        return ()=> clearInterval(inetrval)
    },[count, navigate, location, path])
  return (
       <div className='d-flex flex-column justify-content-center align-items-center w-100' style={{height:'80vh'}}>
        <h1 className='text-center'>Redirecting to you in {count} second</h1> <br/>
            <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
       </div>

  )
}

export default Spinner