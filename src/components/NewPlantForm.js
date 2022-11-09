import React, { useState } from "react";



function NewPlantForm( { allThePlants , setAllThePlants } ) {


  const [ newPlantObj , setNewPlantObj ] = useState(  { name: "", image: "", price: 0.00 }  )
    console.log( "STATE OF newPlantObj: " , newPlantObj )


  const handleSubmit =( se )=>{

    se.preventDefault()

    //// OPTIMISTIC RENDERING
    // setAllThePlants(  [ ...allThePlants , newPlantObj ]  )

      const configObj = {

        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( newPlantObj )

      }

    fetch( "http://localhost:6001/plants" , configObj )
    .then( response => response.json() )
    .then( newObjFromDatabase => { 
      
      //// PESIMISTIC RENDERING
      setAllThePlants(  [ ...allThePlants , newObjFromDatabase ]  )

    } )
    // .then( console.log )

  }




  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>

      <form onSubmit={ handleSubmit } >
 

        < input type="text" name="name" placeholder="Plant name"  
        
          value={ newPlantObj.name }  
          onChange={    (se) => setNewPlantObj(  { ...newPlantObj , name: se.target.value  }  )    } 
        
        />


        < input type="text" name="image" placeholder="Image URL"  
        
          value={ newPlantObj.image }  
          onChange={ (se) => setNewPlantObj(  { ...newPlantObj , image: se.target.value } ) }
          
        />


        < input type="number" name="price" step="0.01" placeholder="Price"  
        
          value={ newPlantObj.price } 
          onChange={ (se) => setNewPlantObj(  { ...newPlantObj , price: se.target.value }  ) }
          
        />


        <button type="submit">Add Plant</button>

      </form>

    </div>
  );
}

export default NewPlantForm;
































// function NewPlantForm( { allThePlants , setAllThePlants } ) {
//   console.log( setAllThePlants )


//   const [ nameInputValue , setNameInputValue ] = useState( "" )

//   const [ imageInputValue , setImageInputValue ] = useState( "" )

//   const [ priceInputValue , setPriceInputValue ] = useState( 0.00 )


//   const handleSubmit =( se )=>{

//     se.preventDefault()

//     const newPlant = {

//       name: nameInputValue,
//       image: imageInputValue,
//       price: priceInputValue

//     }


//     const configObj = {

//       method: "POST",
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify( newPlant )

//     }

//       fetch( "http://localhost:6001/plants" , configObj )
//       .then( response => response.json() )
//       .then( newObjFromDatabase => { 
        
//         //// PESIMISTIC RENDERING
//         setAllThePlants(  [ ...allThePlants , newObjFromDatabase ]  )

//       } )
//       // .then( console.log )


//     // setAllThePlants(  [ ...allThePlants , newPlant ]  )
//     // setAllThePlants(  [ ...allThePlants , newPlant ]  )
//     // [{}{}{}] -> {}{}{}

//     console.log( ":)" )

//   }

//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>

//       <form onSubmit={ handleSubmit } >
 

//         < input type="text" name="name" placeholder="Plant name"  
        
//           value={ nameInputValue }  onChange={ (se) => setNameInputValue( se.target.value ) } 
        
//         />


//         < input type="text" name="image" placeholder="Image URL"  
        
//           value={ imageInputValue }  onChange={ (se) => setImageInputValue( se.target.value ) }
          
//         />


//         < input type="number" name="price" step="0.01" placeholder="Price"  
        
//           value={ priceInputValue } onChange={ (se) => setPriceInputValue( se.target.value ) }
          
//         />

//         <button type="submit">Add Plant</button>

//       </form>

//     </div>
//   );
// }

// export default NewPlantForm;
