import React from "react"
function UglyThing(props) {
    return(
        <div className="uglything">
            <h2>{props.item.title}</h2>
            {/* <input className="uglythingTitle" type="text" value={props.item.title}/> */}
            <p>{props.item.description}</p>
            <img alt="" src={props.item.imgUrl}></img>
            <button className="delete" onClick={()=>props.handleDelete(props.item._id)}>Delete Entry</button>
        </div>
    )
}
export default UglyThing