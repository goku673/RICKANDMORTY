
import Card from "../Card/Card"
import  styles from "./Cards.module.css"

const Cards =({characters})=>{
    console.log(characters) ; 
    return (

           <div className={styles.Cards}>
                 
                 <div >{
                      characters.map((personaje) =>{
                        return (<Card
                          key={personaje.id}
                          id = {personaje.id}
                          name = {personaje.name}
                          species = {personaje.species }
                          gender = {personaje.gender}
                          image = {personaje.image}
                          onClose = {  ()=> window.alert(" hacemos como si cerrara la card jjaja ")}                       
                        
                        /> ) ; 
                      })
                    
                    }
                 </div>

                     
           </div>
    ) ;  
}


export default Cards