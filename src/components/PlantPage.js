import React, { useEffect, useState } from "react";

import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage( ) {


  const [ allThePlants , setAllThePlants ] = useState( [] )
    console.log( "State of allThePlants: " , allThePlants )


  useEffect(  ()=>{

    fetch(  "http://localhost:6001/plants" )
    .then(  response => response.json() )
    .then(  dataFromTheFetch => { setAllThePlants( dataFromTheFetch ) }  )
    // .then( console.log )

  } , [ ]  )

  const [ searchText , setSearchText ] = useState( "" )


    const filteredPlantsArray = allThePlants.filter(  
      
      ( eachPlantObj ) => { 
        return( 
          eachPlantObj.name.toLowerCase().includes( searchText.toLowerCase() ) 
        )
      }

    )
    console.log( "filteredPlantsArray: " , filteredPlantsArray )




  return (
    <main>

      <NewPlantForm  allThePlants={ allThePlants }  setAllThePlants={ setAllThePlants }  />
      
      <Search  searchText={ searchText }  setSearchText={ setSearchText }  />

      <PlantList  plantArrayOfObjs={ filteredPlantsArray }  />

    </main>
  );
}

export default PlantPage;



/*


// const filteredPlantsArray = allThePlants.filter(  ( eachPlantObj ) => eachPlantObj.name == searchText  )
    // const filteredPlantsArray = allThePlants.filter(  ( eachPlantObj ) => eachPlantObj.name.includes( searchText )  )
    // const filteredPlantsArray = allThePlants.filter(  ( eachPlantObj ) => eachPlantObj.name.toLowerCase().includes( searchText.toLowerCase() )
    const filteredPlantsArray = allThePlants.filter(  ( eachPlantObj ) => { 
        return( 
          eachPlantObj.name.toLowerCase().includes( searchText.toLowerCase() ) 
        )
      }
    )
    console.log( "filteredPlantsArray: " , filteredPlantsArray )


*/