import { act } from "react"
import { createContext, useContext, useEffect, useReducer, useState } from "react"
const CitesContext=createContext()

const initalstate={
  cities:[],
  isLoading:false,
  currentcity:{},
  error:""
}

function reducer(state,action){
  switch(action.type){
    case "Loading":
      return {
        ...state,
        isLoading:true
      }
     case "cities/loaded":
     return {
       ...state,
       isLoading:false,
       cities:action.payload
      }
      case "city/loaded":
        return{
          ...state,
          isLoading:false,
          currentcity:action.payload
        }
      case "city/created":
        return{
          ...state,
          isLoading:false,
          cities:(cities)=>[...cities,action.payload]
        }
      case "city/deleted":
        return{
          ...state,
          isLoading:false,
          cities:(cite)=>cite.filter( (city)=>city.id!==action.payload)
        }
      case "error":
       return {
        ...state,
        isLoading:false,
         error:alert(action.payload)
        }
    default :throw new Error("unkown event")
  }
}

function CitiesProvider({children}) {

   const [{  cities,
    isLoading,
    currentcity,
    error,},dispach]=useReducer(reducer,initalstate)
  // const [cities,setCities]=useState([])
  // const [isLoading ,setIsloading]=useState(false)
  //  const [currentcity,setCurrentcity]=useState({})
  
  
  useEffect(
    function (){
     async function fechcites(){
      dispach({type:"Loading"})
       try { 
        const res =await fetch(`http://localhost:8000/cities`)
        const data=await res.json();
         dispach({type:"cities/loaded",payload:data})
      }
        catch{
          dispach({type:"error" ,payload:"there is an error loading the data"})
        }
      }
      fechcites();
    },[]
  )
  
  async function getcity(id){
    dispach({type:"Loading"})
    try { 
   
     const res =await fetch(`http://localhost:8000/cities/${id}`)
     const data=await res.json();
     dispach({type:"city/loaded" ,payload:data})
    
    }
     catch{
      dispach({type:"error",payload:"there is an error while loading the city data "})
     }
   }

  async function createnewcity(newCity){
    dispach({type:"Loading"})
    try { 
     const res =await fetch(`http://localhost:8000/cities/`,{
      method: "POST",
      body: JSON.stringify(newCity),
      headers: {
        "Content-Type": "application/json",
      },
     })
     const data=await res.json();
      dispach({type:"city/created",payload:data})
    
    }
     catch{
      dispach({type:"error",payload:"there is an error while creating a new city"})
     }
   }
  async function deletecity(id){
    dispach({type:"Loading"})
    try { 
      await fetch(`http://localhost:8000/cities/${id}`,{
      method: "DELETE",
     })
    dispach({type:"city/deleted",payload:id})

    }
     catch{
      dispach({type:"error",payload:"there is an error while deleting a city"})
     }
   }
  
  
  return (
    <CitesContext.Provider 
    value={
      {
        cities,
        isLoading,
        currentcity,
        getcity,
        createnewcity,
        deletecity,
      }
    }
    
    >
      {children}
    </CitesContext.Provider>
  )
}
function useCites(){
  const context=useContext(CitesContext)
  if(context===undefined)
    throw new Error("using of context out of context provider"); 
  return context;
}
export  {CitiesProvider,useCites};
