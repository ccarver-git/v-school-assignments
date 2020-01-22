import React from 'react'
import blogPosts from '../blogPosts.js'

function BlogList(props){
    console.log()
    
    return(
        <div className="container">
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
            <p>Posted by <a href="#">{props.author}</a> on {props.date}</p>
        </div>
    )
}

export default BlogList