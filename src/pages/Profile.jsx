import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Highlights from '../components/Highlights'
import ProfilePosts from '../components/ProfilePosts'
import Footer from '../components/Footer'

function Profile() {
  return (
    <div className='container pt-8 max-w-5xl'>
        <main className="bg-slate-50">
            <ProfileHeader />
            <Highlights />
            <ProfilePosts />
            <Footer />
        </main>
    </div>
  )
}

export default Profile