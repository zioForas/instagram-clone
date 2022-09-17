import React from 'react'
import Stories from '../components/Stories'
import BasicProfile from "../components/BasicProfile"
import Suggestions from '../components/Suggestions'
import Footer from '../components/Footer'
import Post from '../components/Post'


function Home() {
  return (

    <div className="container pt-8 max-w-5xl">
    <main className="grid grid-cols-3">
        <div className="md:px-12 lg:px-0 col-span-3 lg:col-span-2">
         <Stories/> 
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
        <div className="col-span-1 hidden lg:block">
            <div className="fixed p-5 w-80">

            <BasicProfile />
            <Suggestions />
            <Footer />
            </div>
        </div>
    </main>
    </div>
    )
}

export default Home