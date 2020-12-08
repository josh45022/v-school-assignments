import React from "react"

function BlogList(props) {
    const h2Styles = {
        fontFamily: "arial",
        fontWeight:"thicker",
        fontSize:"30px",
        marginLeft: "500px",
        marginRight: "500px"
    }
    const h3Styles = {
        fontFamily: "arial",
        fontWeight:"100",
        fontSize:"30px",
        marginLeft: "500px",
        marginRight: "500px"
    }
    const pStyles = {
        fontFamily:"arial",
        marginLeft: "500px",
        marginBottom: "100px",
        marginRight: "500px"
    }
    return (
        <div>
            <h2 style={h2Styles}>{props.post.title}</h2>
            <h3 style={h3Styles}>{props.post.subTitle}</h3>
            <p style={pStyles}> Posted By {props.post.author} on {props.post.date}</p>
        </div>
    )
}

export default BlogList