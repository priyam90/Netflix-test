import {  useState } from "react";
import "./login.scss";
import {useHistory} from 'react-router-dom';


export default function Login() {
 
  const history = useHistory();
  const[email, setEmail]= useState('');
  const[password,setPass]= useState('');
  
  const Loging = async (e)=>{
     e.preventDefault();
     const res = await fetch('/login',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
           email,password
        })
     });
  
     const data = res.json();

     if(res.status === 400 || !data){
        window.alert("Invalid Credential")
     }
     else{
        window.alert("login Successfully");
        history.push('/');
     }
  }
 return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">

      <form method="POST">
        <div class="email-login">
         
         <input type="text" placeholder="Enter Email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
       
         <input type="password" placeholder="Enter Password" name="password" id="password" value={password} onChange={(e)=>setPass(e.target.value)}required/>
      </div>
      <button class="cta-btn" onClick={Loging}>Log In</button>
    
   </form>
      </div>
    </div>
  );
}
