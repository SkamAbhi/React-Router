import { useState } from "react"
import { Navigate } from "react-router-dom"


export default function About() {
   
   const [user,setUser] = useState("skam")

   if (!user) {
    return <Navigate to="/" replace="true"/>
   }
    return (
      <div className='about'>
         <h2>About us</h2>
         <p>This a about page created ......<br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros in cursus. Risus sed vulputate odio ut. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Eu mi bibendum neque egestas. Id semper risus in hendrerit. Non arcu risus quis varius quam </p>
         <p>quisque id diam vel. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Tincidunt praesent semper feugiat nibh sed pulvinar. Sed id semper risus in hendrerit gravida rutrum quisque. Nunc sed augue lacus viverra vitae congue eu.</p>

          <button onClick={()=> setUser(null)}>Logout</button>
     </div>
    )
  }