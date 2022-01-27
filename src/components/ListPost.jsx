import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../api/api'



const ListaPost = ({ url }) => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    search(url, setPosts)
  }, [])

  return (
    <section className="posts container">
      {
        posts.map((post) => (
          <Link key={post.id} className={`card-post card-post--${post.categoria}`} to={`/posts/${post.id}`}>
            <article>
              <h3 className="card-post__title">
                {post.title}
              </h3>
              <p className="card-post__goal">{post.metadescription}</p>
            </article>
          </Link>
        ))
      }
    </section>
  )
}

export default ListaPost