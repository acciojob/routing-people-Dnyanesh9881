import React from "react";
import { NavLink } from "react-router-dom";
import Data from "./Data";



const Links=()=>{

    return (
        <div>
            <h1>User List</h1>
            <ul>
     {
        Data.map(item=> <li><NavLink id={`item.id`} to={`/user/${item.id}`}>{item.name}</NavLink></li>)
     }
     </ul>
        </div>
    )
}

export default Links