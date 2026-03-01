import { useState } from "react";
import Traffic from "./eas";
import './easwar.css';
import { Button } from "react-bootstrap";

function LoginForm(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[message,setMessage]=useState("");

    const[isloggedin,setIsloggedin]=useState(false);

    const handleLogin=()=>{
        if(username==="varsha" && password==="varsha@rcet"){
            setMessage("login successful");  
            setIsloggedin(true);
        }else{

            alert(`The Provided Data is Incorrect`)
        }
};
   
    if(isloggedin){
        return<Traffic/>;
        
    }


    return(
        
         <center>
            
        <div className="main-box">
           
            <h2>Login Form</h2><br />
            <input type="text"  placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <br/><br/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br /><br /><br />
            <Button variant="info" onClick={handleLogin}>Login</Button>
            <p>{message}</p>
            
        </div>
        </center>
       
    )
}
export default LoginForm;