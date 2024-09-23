import React from 'react'

function resetPassword() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100' style={{height:'50vh'}}>
        <div className='p-5 border w-25'>
            <form>
                <input type="text" className='form-control' placeholder='Enter new password'/>
                <button className='btn btn-dark'>Reset Password</button>
            </form>
        </div>
    </div>
  )
}

export default resetPassword