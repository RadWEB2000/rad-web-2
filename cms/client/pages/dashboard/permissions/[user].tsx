import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "../../../components/Menu";
import { permissions } from "../../../data/permissions";

const Page = ({currentUser}:{currentUser:string}) => {
    let [values,setValues] = useState({
        email:'',
        login:'',
        password:'',
        title:'',
        status:''
    })
    useEffect(() => {
           const getValues = permissions.filter((item:string|any) => item.path.includes(currentUser));
           setValues({
                email:getValues[0].email,
                login:getValues[0].login,
                password:getValues[0].password,
                title:getValues[0].title,
                status:getValues[0].status
           })

    },[currentUser])
    const [oldPassword,setOldPassowrd] = useState('');
    const [repeatPassword,setRepeatPassowrd] = useState('');
    const [newPassword,setNewPassowrd] = useState('');
    const handleNewPassword = () => {
        if(oldPassword === repeatPassword && oldPassword === values.password && repeatPassword === values.password){
            if(newPassword.includes('admin')){
                return console.log('ok');
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    handleNewPassword();
    // console.log(oldPassword)

    return(
        <>
            <Menu/>
            <h1>{values.title}</h1>
            <ul>
                <li>
                    <b>Login</b>
                    <div>
                        <p>{values.login}</p>
                        <div>
                            <label htmlFor="">Update login</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                </li>
                <li>
                    <b>Password</b>
                    <div>
                        <div>
                            <label htmlFor="">Recent password</label>
                            <input type="text" name="recent" id="" onInput={(e:any) => setOldPassowrd(e.target.value)}/>
                            <label htmlFor="">Repeat recent password</label>
                            <input type="text" name="repeat" id="" onInput={(e:any) => setRepeatPassowrd(e.target.value)}/>
                            <label htmlFor="">Update password</label>
                            <input type="text" name="new" id="" onInput={(e:any) => setNewPassowrd(e.target.value)}/>
                        </div>
                    </div>
                </li>
                <li>
                    <b>Email</b>
                    <div>
                        <p>{values.email}</p>
                        <div>
                            <label htmlFor="">Update email</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                </li>
                {
                    values.status === 'admin' &&
                    <li>
                        <b>Status</b>
                        <div>
                            <select name="" id="">
                                <option value="admin">admin</option>
                                <option value="editor">editor</option>
                                <option value="user">user</option>
                            </select>
                        </div>
                    </li>
                }
            </ul>
        </>
    )
}
export default Page;
export const getStaticProps = async ({params}:{params:any}) => {
    const {user} = params;
    return{
        props:{
            currentUser:user
        }
    }
}
export const getStaticPaths = async () => {
    return{
        paths:[],
        fallback:true
    }
}