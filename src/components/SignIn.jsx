import React from 'react'
import auth from './Assets/auth.jpg'
import Login from "./Login.jsx"
export default function SignIn() {
  return (
    <div style={{width:"100%",display:"flex"}}>
      <div style={{ width:"40%"}}><img style={{width:"100%"}} src={auth} alt="" /></div>
      <div style={{background:"url(https://media.sugarcosmetics.com/upload/loginPageBackGroundTexture.png)",width:"60%"}}>
        <Login/>
      </div>
    </div>
  )
}
