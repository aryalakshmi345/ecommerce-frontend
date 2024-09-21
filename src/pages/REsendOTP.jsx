import React, { useState } from 'react';
import { resendotpAPI } from '../services/allApi';

const ResendOtp = ({ email }) => {
    const handleResendOtp = async () => {
        try {
            const res = await resendotpAPI(email)
            alert(res.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <button className='btn btn-dark' onClick={handleResendOtp}>Resend OTP</button>
    );
};

export default ResendOtp;
