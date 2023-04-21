import React from "react";
import styles  from './Card.module.css'
class   Card  extends  React.Component {
      
      constructor (props){
         super (props) ; 

      }

      render(){
          console.log(this.props);
         return  ( <div className={styles.Card}  >
                     <button onClick={this.props.onClose}>x</button>
                     <h1> {this.props.name}</h1>
                     <h2>{this.props.id}</h2>
                     <h2>{this.props.gender}</h2>
                     <h2>{this.props.species}</h2>
                     <img  src={this.props.image} alt={this.props.name}></img>
                    
                 </div>) ; 
      }


}

export default Card ; 