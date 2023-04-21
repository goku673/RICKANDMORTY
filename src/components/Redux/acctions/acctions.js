import {
    ADD_FAV,
    REMOVE_FAVE,
    FILTER,
    ORDER,
    RESET,
    ADD_CHARACTERS,
    REMOVE_CHARACTER,
    NEXT_PAGE,
    PREV_PAGE,
    ADD_LOCATION,
    SEARCH_CHARACTER,
    HANDLE_NUMBER,
    RESET_CHARACTER,


} from "./acctions-types";

import axios from "axios";


export function addLocation(path){
         return {
            type :ADD_LOCATION,
            payload : path,
         };
}
export function prevPage(){
    return {
        type:PREV_PAGE,

    };
}


export function nexPage(){
    return {
        type :NEXT_PAGE
    };
}

export function handleNumber(num){
    return {
        type: HANDLE_NUMBER,
        payload :num
    }

}


export function addCharacters (character){
      return{
        type : SEARCH_CHARACTER,
        payload :character
      };
}


export function removeCharacter (id){
    return {
        type : REMOVE_CHARACTER,
        payload : id, 
    }
}

export function adFav (character) {
    
        return async function (dispatch){
              try{
                 const data = await   

              }catch(error){
                console.error(error);
              }
        }
}