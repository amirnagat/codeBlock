import React, { useRef } from 'react'
import axios from 'axios'
import {useNavigate } from "react-router-dom";
export default function Login() {
const navigate = useNavigate();
const userName = useRef();
const password = useRef();
const position = useRef();
const userNameLogin = useRef();
const passwordLogin = useRef();


const Signup = async ()=>{
        const newUser = {
          username:userName.current.value,
          password:password.current.value,
          position:position.current.value,
        };
    
        try {
          const res = await axios.post("https://cute-tan-caiman-ring.cyclic.app/api/register", newUser);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      ;
}
const submitLogin = async () => {
    const user = {
      username: userNameLogin.current.value,
      password: passwordLogin.current.value,
    };
    try {
        const res = await axios.post("https://cute-tan-caiman-ring.cyclic.app/api/login", user)
      console.log(res.data);
      navigate(`/LobbyPage`)
  } catch (err) {
      throw err
    }
  };

  return (
    <div>
     <h1>Sign up</h1> 
     username <input type="text"  ref={userName}/><br/>  
     password <input type="text"  ref={password}/><br/>     
     position <input type="text"  ref={position}/><br/>
    <button onClick={Signup}>Click</button>

        <h1>Login</h1>
       
        username <input type="text"  ref={userNameLogin}/><br/>  
        password <input type="text"  ref={passwordLogin}/><br/> 
        <button onClick={submitLogin}>Click</button>
    </div>
  )
}
