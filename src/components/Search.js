import React, { useState } from "react";

function Search( { searchText , setSearchText } ) {

  // const [ searchText , setSearchText ] = useState( "" )
  //   console.log( "STATE OF searchText: " , searchText )

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>

      <input

        type="text"
        id="search"
        placeholder="Type a name to search..."

        
        value={ searchText }

        onChange={  (se) => setSearchText( se.target.value )  }

      />

    </div>
  );
}

export default Search;
