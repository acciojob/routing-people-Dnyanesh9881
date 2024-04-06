import React from "react";
import { useParams } from 'react-router-dom';
import Data from "./Data";

const User=()=>{
    let {id}=useParams();
    let user=Data.filter(item=> item.id===parseInt(id));
     console.log(user);
    return(
        <div>{
            !user ?"Loading..." :  <div> <h1>User Details</h1>
            <br/>
            <p><span style={{fontWeight:"bold"}}>Name: </span>{user[0].name}</p>
            <br/>
            <p><span style={{fontWeight:"bold"}}>Email: </span>{user[0].email}</p>
            <br/>
            <p><span style={{fontWeight:"bold"}}>Bio: </span>{user[0].bio}</p></div>          }
           
        </div>
    )
}

export default User