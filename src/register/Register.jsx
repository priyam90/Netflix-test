import { useHistory } from "react-router-dom";

import { useState } from "react";

import "./register.scss";

export default function Register() {
  const history = useHistory();
    const [user, setUser]= useState({
            name:"",email:"",phone:"",password:"",cpassword:""
        });
        let name,value;
        const handleInputs = (e)=>{
            console.log(e);
            name= e.target.name;
            value= e.target.value;
        
            setUser({...user,[name]:value});
        }

        const PostData= async (e)=>{
            e.preventDefault();
            const {name, email,phone,password,cpassword}= user;
            const res = await fetch("/register", {
                method:"POST",
                headers:{ "Content-Type":"application/json"
            },
            body:   JSON.stringify({
                name, email,phone,password,cpassword

            })
        });
            const data = await res.json();
        if(res.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
            else{
                window.alert("valid Registration");
                console.log("valid Registration")

                history.push("/login")
            }
        }



  return (
    <div className="register">
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
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form method="POST">
               <input type="text" name="name" id="name" placeholder="NAME" value={user.name} onChange={handleInputs}/>
                <input type="email" name="email" id="email" placeholder="EMAIL ADDRESS" value={user.email} onChange={handleInputs}/>
                <input type="text" name="phone" id="phone" placeholder="phoine" value={user.phone} onChange={handleInputs}/><br/>
                <input type="password" name="password" id="password" placeholder="Password" value={user.password} onChange={handleInputs}/>
                <input type="password" name="cpassword" id="cpassword" placeholder="ConfirmPassword" value={user.cpassword} onChange={handleInputs}/><br/>
                <button type="button" onClick={PostData}>Submit</button>
            </form>
      </div>
    </div>
  );
}
