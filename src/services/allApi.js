import { BASE_URL } from "./baseUrl";
import { commonAPI } from "./commonApi";

// register
export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/users/register`,user,"")
}

// login
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/users/login`,user,"")
}

// authusercheck
export const authCheckAPI = async(header)=>{
    return await commonAPI("GET",`${BASE_URL}/user-auth`,"",header)
}

// authadmihcheck
export const authAdminCheckAPI = async(header)=>{
    return await commonAPI("GET",`${BASE_URL}/admin-auth`,"",header)
}

