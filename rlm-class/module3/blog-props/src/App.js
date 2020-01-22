import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import BlogList from './Components/BlogList'
import blogPosts from './blogPosts.js'
import './styles.css'

function App() {
  const mappedPosts = blogPosts.map(post => {
    return (
      <div>
        
        <BlogList title={post.title} subTitle={post.subTitle} author={post.author} date={post.date}/>
        
      </div>
    )
  })
  return (
    <div >
      <Header />
      {mappedPosts}
      <Footer />
    </div>
  );
}

export default App;
