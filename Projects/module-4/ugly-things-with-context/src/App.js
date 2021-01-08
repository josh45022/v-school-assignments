import React from "react"
import './App.css';
import UglyThing from "./components/UglyThing.js"
import Form from "./components/Form"
import {UglyThingContextConsumer} from './uglyThingContext.js';
const axios = require("axios")

function App() {

    return (
      

                <div className="App">
                      <Form/>

                      <UglyThingContextConsumer>
                        
                          {({listOfItems, handleDelete, handleChange, isEditing, getList, handleEdit, takeToEdit}) => { 

                            console.log(listOfItems)

                            const mappedUglyThings = listOfItems.map(
                              function(item){
                                return(<UglyThing item={item} handleDelete={handleDelete} handleChange={handleChange} isEditing={isEditing} getList={getList} handleEdit={handleEdit} takeToEdit={takeToEdit} key={item._id}/>)
                                  }
                                )

                            return(
                              
                                mappedUglyThings
                              
                              
                            )
                          }}
                        </UglyThingContextConsumer>
                

                
                
                  

                </div>
        
    );

  
}

export default App;


