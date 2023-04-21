import React from "react";
import Home from "./components/Home/Home";
import { Route,Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import About from "./components/About/About";
const App = () =>{
 
 return (

    <div>
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/login"element={<Login/>} />
             <Route path="/about" element={<About/>}/>

        </Routes>
    </div>
 ); 
}

export default  App ; 