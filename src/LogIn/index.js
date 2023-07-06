import React,{useState} from "react";
import './style.css'

const LogIn = () =>{
    const[Username,setUsername] = useState('')
    const[password,setpassword] = useState('')
    console.log({Username});
    console.log({password});

    const handleSubmit =async (e) =>{
        e.preventDefault();
        const data ={
            username: Username,
            password: password
        }

        try{
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await response.json();
            console.log({result});
        }
        catch(error){
            console.log(error.message);
        }

    }
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>LogIn</h1>
                <input placeholder="Enter Username" type="text"
                onChange={(e) => {setUsername(e.target.value)}}
                />
                <br/>
                <br/>
                <input placeholder="Enter PassWord" type="password"
                onChange={(e) => {setpassword(e.target.value)}}
                />
                <br/>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LogIn