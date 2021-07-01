import React, {useState, useEffect} from "react"
import axios from "axios"
const UglyThingContext = React.createContext()

function UglyThingContextProvider (props) {

    const initState = {
        listOfItems: [],
        isEditing: false,
    }
    const [state, setState] = useState(initState)

    const getList = () => {
        console.log("hiii")
        axios.get("https://api.vschool.io/joshuabenbaba/thing")
            .then(response => setState({listOfItems: response.data.map(item => ({...item, isEditing: false}))}))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        return getList()
    }

    , [])

    const handleChange = (event) => {
        const {name, value} = event.target
        setState({[name]: value})
    }

    const handleDelete = (id) => {

        axios.delete(`https://api.vschool.io/joshuabenbaba/thing/${id}`)
            .then(response => getList())
            .catch(error => console.log(error))
        return 
    }

    const takeToEdit = (id) => {
        return setState({listOfItems: state?state.listOfItems.map(item => item._id === id? {...item, isEditing: !item.isEditing}:item):null})
           
    }

    const handleEdit = (id, putObject) => {
        axios.put(`https://api.vschool.io/joshuabenbaba/thing/${id}`, putObject)
            .then(response => getList())
            .catch(error => console.log(error))
        return 
    }


        return(
            <UglyThingContext.Provider value={{
                listOfItems: state?state.listOfItems:null, 
                handleDelete: handleDelete, 
                handleChange:handleChange, 
                isEditing: state?state.isEditing:null, 
                getList: getList, 
                handleEdit: handleEdit, 
                takeToEdit: takeToEdit
                }}>
                {props.children}
            </UglyThingContext.Provider>
        )
    }


export {UglyThingContextProvider, UglyThingContext}