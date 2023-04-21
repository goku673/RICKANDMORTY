import React from "react";
import Style from "./Nav.module.css";
const SearchBar  = () =>{
 
 

 
    return (

        <div >
               <div className={Style["input-container"]}>

                     <input  type="text" placeholder="buscar..." ></input>

               </div>
      
     </div>
    );

}

export default SearchBar