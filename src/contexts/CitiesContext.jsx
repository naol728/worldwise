import { createContext, useContext, useEffect, useState } from "react"
const CitesContext=createContext()
function CitiesProvider({children}) {
  const [cities,setCities]=useState([])
  const [isLoading ,setIsloading]=useState(false)
   const [currentcity,setCurrentcity]=useState({})
  
  
  useEffect(
    function (){
     async function fechcites(){
       try { 



        setIsloading(true)
        const res =await fetch(`http://localhost:8000/cities`)
        const data=await res.json();
        setCities(data)}
        catch{
          alert("there is an error loading the data")
        }
        finally{
          setIsloading(false)
        }
      }
     
      fechcites();
    },[]
  )
  
  async function getcity(id){
    try { 
     setIsloading(true)
     const res =await fetch(`http://localhost:8000/cities/${id}`)
     const data=await res.json();
     setCurrentcity(data)}
     catch{
       alert("there is an error loading the data")
     }
     finally{
       setIsloading(false)
     }
   }

  async function createnewcity(newCity){
    try { 
     setIsloading(true)
     const res =await fetch(`http://localhost:8000/cities/`,{
      method: "POST",
      body: JSON.stringify(newCity),
      headers: {
        "Content-Type": "application/json",
      },
     })
     const data=await res.json();
     setCities((cities)=>[...cities,data])
    
    }
     catch{
       alert("there is an error CREATING the CITY")
     }
     finally{
       setIsloading(false)
     }
   }
  async function deletecity(id){
    try { 
     setIsloading(true)
      await fetch(`http://localhost:8000/cities/${id}`,{
      method: "DELETE",
     })
    
     setCities((cite)=>cite.filter( (city)=>city.id!==id))

    }
     catch{
       alert("there is an error DELETING the CITY")
     }
     finally{
       setIsloading(false)
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
