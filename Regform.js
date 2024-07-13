import React, { useState } from "react";

function Header(){
    const data={name: "", email: "", Password:""}
    const [inputdta, setinputdata] =useState(data)
    function handledata(e){
        setinputdata({...inputdta, [e.target.name]:e.target.value})
  
    }

    function handlesubmit(e){
        e.preventdefault();
        if(!inputdta.name || !inputdta.email || !inputdta.Password){
            alert("All filed are check");
        }
    }
    return(
        <>
        <form className="Container" onSubmit={handlesubmit}>
        <div className="Header">
        <h1>Registration Form</h1>
        </div>
        <div className="Header1">

        <input type="text" value={inputdta.name} onChange={handledata} 
        placeholder="Enter Your Name" name="name"></input><br/>

        <input type="text" value={inputdta.email} onChange={handledata} 
        placeholder="Enter Your Email" name="Email"></input><br/>

        <input type="text" value={inputdta.Password} onChange={handledata} 
        placeholder="Enter Your Password" name="Password"></input>
        <div className="btn"> 
            <button type="submit" onChange={handlesubmit}>Submit</button>
        </div>
        </div>
        </form>
        </>
    )
}
export default Header;