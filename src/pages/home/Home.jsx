import React from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'

function Home() {
  return (
    <div className='home'>
      <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
      </>
    </div>
  )
}

export default Home
