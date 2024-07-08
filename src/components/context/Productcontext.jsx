import { createContext, useContext } from "react";
import { useEffect,useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer"


 const Appcontext=createContext()





// //   const api="https://api.pujakaitem.com/api/products"
// //   // const Global=()=>{
// //   //   return useContext(Appcontext)
// //   // }
// //   const getProducts=async(url)=>{
// //     const data=await(axios.get(api))
// //       console.log(data)
    
// //    }

// //   useEffect(() => {
// //    getProducts(api)
// //     return () => {
// //       second
// //     }
// //   }, [])
const initialState={
    isError:false,
    isLoading:false,

  products:[]
}
const Provider=({children})=>{
    const api="https://api.pujakaitem.com/api/products"
    // const Global=()=>{
    //   return useContext(Appcontext)
    // }
   
   
    
   
    const [state,dispatch]=useReducer(reducer,initialState)
   

     const getProducts=async(url)=>{
        dispatch({type:"LOADING"})
      try {
        const data=await(axios.get(api))
        dispatch({type:"PRODATA",payload:{data}})
          console.log(data)
      } catch (error) {
        dispatch({type:"API_ERROR"})
        console.log("eror")
        
      }
      
     }
 
  useEffect(() => {
   getProducts(api)
    return () => {
     
    }
  }, [])
    return <Appcontext.Provider value={{...state}}>
        {children}
    </Appcontext.Provider>
}
const Global=()=>{
    return useContext(Appcontext)
  }


export {Provider,Appcontext,Global}

