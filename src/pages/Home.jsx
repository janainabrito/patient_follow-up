import React from 'react'
import ListaPost from '../components/ListPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet notícias</h2>
      </div>
      <ListaPost url={'/posts'} />
    </main>
    
  )
}

export default Home
