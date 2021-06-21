import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GifGrid } from "./GifGrid"


function GifExpertApp() {

 const [categories, setCategories] = useState(['Goku'])

 // const handleAdd = ()=>{
 //  //setCategories([...categories,'Duki'])
 //  setCategories(cats => [...cats,'Riquelme'] )
 // }



 return (
  <>
  <h2>Gif Expert App</h2>
  <AddCategory setCategories={setCategories}/>
  <hr/>
   <ol>
    {
     categories.map( category => 
      
      <GifGrid
       category={category}
       key={category}
      />

     )
    }
   </ol>
  </>
 )
}



export default GifExpertApp

