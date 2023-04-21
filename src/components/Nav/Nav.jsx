import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logoRick from "../Image/logo.jpg"
//import {Home} from '@mui/icons-material/Home';
import  Style from "./Nav.module.css"
const  NavBar =() =>{

      return (
              <div className={Style["nav-container"]}>
                    <div className={Style["logo-container"]}>
                    
                             <img  src={logoRick} alt="logorick"/>
                    </div>
                 
                    <div className= {Style["button-container"]        }>

                        <Link  to="/">  <button>Home</button>  </Link>
                       <Link to="/about"> <button>About</button></Link>
                       <Link to= "/login"><button>log in </button></Link>
                       
                       <SearchBar/>

                    </div>
              </div>
      ); 
}

export default NavBar ; 