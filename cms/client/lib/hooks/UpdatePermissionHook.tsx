import React from 'react'
import { useState } from 'react';
interface IntUpdatePermissionHook {
    email:string;
    login:string;
    password:string;
    title:string;
    status:'admin'|'editor'|'user'
}
export const UpdatePermissionHook = ({email,login,password,title,status}:IntUpdatePermissionHook) => {
    const [currentValues,setCurrentValues] = useState({
        email:email,
        login:login,
        password:password,
        title:title,
        status:status
    })
    

}