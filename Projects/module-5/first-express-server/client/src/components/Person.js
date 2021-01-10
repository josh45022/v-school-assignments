import React, {useState} from "react"
import AddPersonForm from "./addPersonForm"

function Person(props) {
    console.log(props)
    const {name, age, _id, deletePerson, editPerson} = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div>
            {!editToggle?
            <React.Fragment>
            <h1>Hi my name is {name}</h1>
            <h1> and I am {age} years old</h1>
            <button onClick={()=>deletePerson(_id)}>Delete</button>
            <button onClick={()=>{ setEditToggle(prevToggle => !prevToggle)}}>Edit</button> 
            </React.Fragment>
            :
            <>
            <AddPersonForm
            name={name} 
            age={age}
            buttonText={"Submit Edit"}
            _id={_id}
            submit={editPerson}
            
            />
            <button onClick={()=>{ setEditToggle(prevToggle => !prevToggle)}}>Close</button>
            </>            
            }

        </div>
    )
} 

export default Person