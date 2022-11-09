import React, { useState } from "react";

{/* < PlantCard plantObj={eachPlantObj} /> */}

function PlantCard( { plantObj } ) {

  const [ toggleButton , setToggleButton ] = useState( true )
    // console.log( "STATE OF toggleButton: " , toggleButton )

    const handleToggle =( se )=>{

      setToggleButton( !toggleButton )

    }

  return (
    <li className="card">

      <img src={ plantObj.image } alt={"plant name"} />
      <h4>{ plantObj.name }</h4>
      <p>Price: ${ plantObj.price }</p>

      {
        // CONDITION ?
        toggleButton ? 
        
        //// TRUE
        (
          <button className="primary" onClick={ handleToggle } > In Stock </button>
        ) 
        
        : 
        
        (
          <button onClick={ handleToggle } >Out of Stock</button>
        )
        //// FALSE

      }


    </li>
  );
}

export default PlantCard;
