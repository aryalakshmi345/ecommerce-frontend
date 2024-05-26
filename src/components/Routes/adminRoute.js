import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";
import { authAdminCheckAPI } from "../../services/allApi";

export default function AdminRoute(){
    const [ok, setOk] = useState(false)
    const [auth,setAuth] = useAuth()

    useEffect(()=>{
        const authCheck =async()=>{
            const reqheader={
                "Authorization" : auth?.token
            }
            const res = await authAdminCheckAPI(reqheader)
            if(res?.data?.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
        if(auth?.token) authCheck()
    },[auth?.token])

    return ok ? <Outlet/> :<Spinner path=""/>
}