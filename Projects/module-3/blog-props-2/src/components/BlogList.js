import React from "react"
import BlogPostInfo from "../BlogPostInfo.js"
import BlogPost from "./BlogPost.js"

function BlogList() {
    const blogPostData = BlogPostInfo.map(function(item){
        return (
            <BlogPost post={item}/>
        )
    })
    return (
        blogPostData
    )
}
export default BlogList