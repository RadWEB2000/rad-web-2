import { NextPage } from "next";
import { FormEventHandler, useRef,useState } from "react";

const Page:NextPage = () => {
  const [alert,setAlert] = useState('');
  const redirect = () => {
    if(window !== undefined){
      window.location.href='/dashboard'
    }
  }
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const login = e.target.elements.login.value;
    const password = e.target.elements.password.value;
      if(login !== '' && password !== ''){
        if(login === 'admin' && password === 'admin'){redirect()}
        else if(login !== 'admin' && password === 'admin'){setAlert('niepoprawny login')}
        else if(login === 'admin' && password !== 'admin'){setAlert('niepoprawne hasło')}
        else {setAlert('zostały wprowadzone złe dane')}
      }
      else if(login !== '' && password === ''){setAlert('password pusty')}
      else if(login === '' && password !== ''){setAlert('login pusty')}
      else {setAlert('inputy puste')}
  }
  return(
    <>
      <h1>Zaloguj się</h1>
      <form method='POST' onSubmit={handleSubmit} >
        <input type="text" name="login" id="" placeholder="login" />
        <input type="password" name="password" id="" placeholder='hasło' />
        <button type="submit">wejdź</button>
      </form>
      <div>
        <h2>{alert}</h2> 
      </div>
    </>
  )
}
export default Page;