import { useState, useEffect } from 'react'
import blogFetch from '../axios/config'
import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {
  const [posts, setPosts] = useState([])
  console.log( posts)
  const getPosts = async() => {
      try {
        const response = await blogFetch.get('/posts')
        
        const data = response.data
        setPosts(data)
      } catch (err) {
        console.log(err)
      } finally {
      
      }
  }

  useEffect(() =>{
      getPosts()
  },[])

  return (
    <>
        <h1>Últimos posts</h1>
        {posts.length === 0 ? (<p>Carregando</p>): (
          posts.map((post) => (
          <div className="post" key={post.id}>
           <h2>{post.title}</h2>
           <p>{post.body}</p>
           <Link className='btn' to={`/posts/${post.id}`}>Ler mais</Link>
          </div>
          ))
      )}
    </>
    
  )
}

export default Home