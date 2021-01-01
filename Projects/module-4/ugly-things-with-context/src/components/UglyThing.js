import React from "react"
import { UglyThingContextConsumer } from "../uglyThingContext"
class UglyThing extends React.Component {
    state = {
        title: this.props.item.title,
        description: this.props.item.description,
        imgUrl: this.props.item.imgUrl
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="uglything">
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.description}</p>
                <img alt="" src={this.props.item.imgUrl}></img>
                        <div className= {`${this.props.isEditing?"is":"isNot"}Editable`}>
                            <form>
                            <input 
                                // className="uglythingTitle" 
                                name="title" 
                                type="text" 
                                value={this.state.title}
                                onChange={this.handleChange}
                                />
                            <input 
                                //className="uglythingDescr" 
                                name="description" 
                                value={this.state.description}
                                onChange={this.handleChange}
                                />
                            <input 
                                //className="uglythingimgUrl" 
                                name="imgUrl" 
                                value={this.state.imgUrl}
                                onChange={this.handleChange}
                                />
                            </form>
                        
                        </div>
                        
                <button className="delete" onClick={()=>this.props.handleDelete(this.props.item._id)}>Delete Entry</button>
                <button 
                    className="delete" 
                    onClick={this.props.isEditing === false?()=>this.props.takeToEdit():()=>this.props.handleEdit(this.props.item._id, this.state)}>Edit Entry
                    </button>
            </div>
        )
    }
}
export default UglyThing