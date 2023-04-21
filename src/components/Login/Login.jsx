import React from "react";
import { useState } from "react";
import   "./Login.css"
const Login = () =>{
 
// aqui vendran los datos que pondre ami input
  const [userData,setUserData] =  useState(
   {
      email :"",
      password :""

   });
 //para controlar los datos si estan errados de mi inpunt

    const [dataError ,setDataError] = useState(
      {
        errorEmail :"",
        errorPassword: ""
      }
    );

    // expresiones regulares para constarseña y numero
    const expressionRegularEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const expressionRegularPassword =  /^(?=.*\d.*\d.*\d)[^\s]{8,}$/ ;
    
   console.log(expressionRegularEmail)

    // cuando este escribiendo en el input  me dispare el evento
    const handleInput  = (evento)=>{
      const {value,name}= evento.target ;
        //par que no lo dejen vacio un input 
          if(value.length <= 0){
               setDataError(
                    {

                        ...setDataError,
                        ["errorEmail"] : "el input no puede estar vacio"
                    }

               );
          }else {
                setDataError({});
          }

           console.log(value);
           // esto es para que en tu input tenga un emaiel ent correo y el punto
            if(name ==="email"){
               if(!expressionRegularEmail.test(value)){}
                 setDataError({
                  ...dataError,
                    errorEmail : " te falta un @ mi rey "

                      }
                   
                   );
            }


            // verificamos que tenga almenos 3 numero 
            
            if (name ==="password"){

                  if(!expressionRegularPassword.test(value)){
                      setDataError({
                             ...dataError,
                             errorPassword : "tu formulario  almenos tiene que tener 3 numeros "
                      });     

                  }
            }


            // vericamos que tu password no seha tan corta  
            if(value.length < 5){
              setDataError({
                   ...dataError,
                   errorPassword : "tu contreña tiene que tener ma de 5 caracteres"

              });
            }

            setUserData({...setUserData,[name] :value});
    }
  
    const handleSumit  = (e)=>{
       e.preventDefault();
       console.log("Datos enviados: ", userData);
    }

  return (
        
    <div className="header">
         <h1 className="registrarse-bro">Registrate hola  a todas las personas </h1>
          
      <form  onSubmit={handleSumit} className="formulario-container">

            <label>
                   Email : 
                  <input type="email" name="email" value={userData.email} onChange={handleInput}  aria-label="Ingrese su correo electrónico"/> 
                  { dataError.errorEmail && <p className="error-email">{dataError.errorEmail}</p>}

            </label>

            <label>
                  Passwork :
                  <input type="password" name="password" value={userData.password} onChange={handleInput}/>
                  {dataError.errorPassword && <p className="error-password">{dataError.errorPassword}</p>}
            </label>
            <button >Enviar</button>
      </form>
         
    </div>
  ) ; 
}

export default Login ; 