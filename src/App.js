import React, { useState } from 'react'
import './App.css'
import { googleProvider } from './firebase'


const App = () => {
  const[user,setUser] = useState(null)

const googleLogin =async() => {
  try{
    await auth.signInWithPopup(googleProvider)
    setUser(await auth.currentUser)
  } catch (error){
    console.log(error)
  }
};
console.log(user)
  return (
   <section>
    <div>
      <div className='buttonContainer' onClick={googleLoginu}>
        <img src='https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png' alt=''/>
        <button>Google Login</button>
      </div>
      <div className='buttonContainer'>
        <img src='https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png' alt=''/>
        <button>Facebook Login</button>
      </div>
      <div className='buttonContainer'>
        <img src='https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png' alt=''/>
        <button>Github Login</button>
      </div>
    </div>
    <h1>Email</h1>
   </section>
  )
}

export default App
