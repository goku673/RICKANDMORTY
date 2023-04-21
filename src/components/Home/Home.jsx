import React from "react";
import NavBar from "../Nav/Nav";
import styles from "./Home.module.css"
const  Home = ()=>{

    return (
        <div  className={styles["image"]}>
              <NavBar/>
              <div> home bienbenidos a ami home </div>
         
        </div>
        
    ) ; 
}

export default Home;