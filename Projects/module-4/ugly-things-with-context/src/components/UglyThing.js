import React from "react"
import { UglyThingContextConsumer } from "../uglyThingContext"
class UglyThing extends React.Component {
    state = {
        title: this.props.item?this.props.item.title:null,
        description: this.props.item?this.props.item.description:null,
        imgUrl: this.props.item?this.props.item.imgUrl:null
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){
        console.log(this.props.item.isEditing?"true":null)
        return(
            <div className="uglything">
                <h2>{this.props.item?this.props.item.title:null}</h2>
                <p>{this.props.item?this.props.item.description:null}</p>
                <img alt="" src={this.props.item?this.props.item.imgUrl:null}></img>
                        <div className= {`${this.props.item.isEditing?"is":"isNot"}Editable`}>
                            <form>
                            <input 
                                name="title" 
                                type="text" 
                                placeholder="Title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                />
                            <input 
                                name="description" 
                                placeholder="Description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                />
                            <input 
                                name="imgUrl" 
                                placeholder="Image Url"
                                value={this.state.imgUrl}
                                onChange={this.handleChange}
                                />
                            </form>
                        
                        </div>
                        
                <button className="delete" onClick={() => this.props.handleDelete(this.props.item._id)}>Delete Entry</button>
                {this.props.item.isEditing?<button className="delete" onClick={() => this.props.takeToEdit(this.props.item._id)}>Cancel</button>:null}
                <button 
                    className="delete" 
                    onClick={this.props.item?this.props.item.isEditing === false?()=>this.props.takeToEdit(this.props.item._id):()=>this.props.handleEdit(this.props.item._id, this.state):null}>
                        {this.props.item.isEditing?"Submit Edits":"Edit Entry"}
                </button>
            </div>
        )
    }
}
export default UglyThing