import React, { useEffect, useState } from "react";

import Header from "./Header";
import PlantPage from "./PlantPage";



function App() {


  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}
export default App;


/*


                                      < App /> fetch() + state:[] 
                        < PlantPage />                            < Header />
      < NewPlantForm />  < Search />  < PlantList />
                                    < PlantCard />  






2. I can add a new plant to the page by submitting the form.


3. I can mark a plant as "sold out".


4. I can search for plants by their name and see a filtered list of plants.




< App /> fetch()
  < Header /> ||||
  < PlantPage />  state:[]
      <NewPlantForm />
      <Search />
      <PlantList />
        < PlantCard />  ||||


  1. When the app starts, I can see all plants.

  - When the app starts  ==  "Once Appjs Mounts"
    - useEffect()

*/
