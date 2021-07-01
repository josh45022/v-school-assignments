import React, {useState, useContext} from "react"
import './App.css';
import UglyThing from "./components/UglyThing.js"
import Form from "./components/Form"
import {UglyThingContext} from './uglyThingContext.js';


function App() {
  const {listOfItems, handleDelete, handleChange, isEditing, getList, handleEdit, takeToEdit} = useContext(UglyThingContext)

  const mappedUglyThings = listOfItems?listOfItems.map(
    function(item){
      return(<UglyThing item={item} handleDelete={handleDelete} handleChange={handleChange} getList={getList} handleEdit={handleEdit} takeToEdit={takeToEdit} key={item?item._id:null}/>)
        }
      ):null

    return (
      

                <div className="App">
                      <Form/>
                      {mappedUglyThings}
                
                  

                </div>
        
    );

  
}

export default App;


