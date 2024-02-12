import React from 'react'

type ProductProps ={
    name :string 
    subname:string 
    active :string 
     benefits:string  
     sizes:string 
     instrunctions:string
}





const ArticleDescription = ({ name , subname , active , benefits , sizes , instrunctions} :ProductProps) => {
  return (
  <>

<div>
<div>
    <h1>{name}</h1>
    <h3>{subname} </h3>
</div>

<div>

<div>

<button>DESCRIPTION</button>
<button>INSTRUCTION</button>



    
</div>












</div>






</div>



  </>
  )
}

export default ArticleDescription