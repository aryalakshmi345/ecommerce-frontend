import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function ForgetPassword() {
  const { token } = useParams(); // Get the token from the URL
  const navigate = useNavigate(); // For redirecting if token is invalid
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if the token is expired when the page loads
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Get current time in seconds

      if (decodedToken.exp < currentTime) {
        setMessage('This link has expired. Please request a new password reset link.');
        setTimeout(() => {
          navigate('/login'); // Redirect to the forgot password page after 3 seconds
        }, 5000);
      }
    } catch (error) {
      setMessage('Invalid token.');
    }
  }, [token, navigate]);
  return (
    <div className='d-flex justify-content-center align-items-center w-100' style={{height:'50vh'}}>
        <div className='p-5 border w-25 shadow'>
          { 
          message ? 
            <p>{message}</p>:
            <>
                <h5 className='mb-2 mt-3 text-center'>Resest Password</h5>
                <form>
                    <input type="text" className='form-control' placeholder='Enter new password'/>
                    <button className=' mt-4 btn btn-dark w-100'>Reset Password</button>
                </form>
           </>}
        </div>
    </div>
  )
}

export default ForgetPassword