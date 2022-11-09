import React from "react";

import PlantCard from "./PlantCard";


{/* <PlantList  plantArrayOfObjs={ filterPlantsArray } /> */}



function PlantList( { plantArrayOfObjs } ) {

  const plantsToRender = plantArrayOfObjs.map(  ( eachPlantObj , index ) => {  
    
    return ( <PlantCard  key={ eachPlantObj.id }  plantObj={eachPlantObj}  /> )

  } )

  return (
    <ul className="cards">
      {
        plantsToRender
      }
    </ul>
  );
}

export default PlantList;
