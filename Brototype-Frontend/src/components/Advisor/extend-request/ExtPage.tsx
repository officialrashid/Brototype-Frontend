import { useSelector } from "react-redux"
import SearchBar from "../components/SearchBar"
import ReviewSearchBar from "../schedule /RevieSearchBar"
import ExtHead from "./ExtHead"
import ExtRow from "./ExtRow"
import { useState } from "react"


const ExtPage=()=>{
    const extendData=useSelector((state)=>state)
    const [filteredData,setFilteredData]=useState(extendData)
     const searchFn=(searInp:string)=>{

        console.log(searInp,'hellloo');

       const searchData=extendData.filter((data:any)=>
     {
        console.log(data.name);
        
         return    data.name.toLowerCase().includes(searInp.toLowerCase())

        }
           
        
        
    )
       setFilteredData(searchData) 


    }



    return (
        <>
       
        <div className="m-2 mt-0">
       <ReviewSearchBar searchFn={searchFn}/>
        </div>
        <div className="m-2 mt-6 ">
        <ExtHead/>
        {extendData.length? <ExtRow  extData={filteredData}/>:<div className="text-center mt-12"><h1 className="font-bold text-lg">There is no extend requests</h1></div>}
       
  
     

        </div>

  
      
 
        
        </>
    )
}

export default ExtPage