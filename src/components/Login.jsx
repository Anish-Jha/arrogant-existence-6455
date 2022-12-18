import React from 'react'

export default function login() {
  return (
    <div>
    <div style={{margin:"auto",width:"20%",verticalAlign:"middle",marginTop:"12%"}}>
          <img
            style={{ margin:"auto",width: "150px", height: "108px" }}
            src="https://media.sugarcosmetics.com/upload/Hi!.png"
            alt=""
          />
    </div>
    <h5>Login/Sign Up Using Phone</h5>
    <input style={{border:"1px solid grey",height:"50px",width:"350px",borderRadius:"4px",marginTop:"10px",paddingLeft:"20px",fontSize:"20px"}}placeholder="+91" type="number" />
    <div style={{width:"70%",margin:"auto",fontSize:"13px",justifyContent:"center",marginTop:"15px",fontWeight:"500"}}>
    Registering for this site allows you to access your order status and history. Just fill in the above fields, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
    </div>
    <button style={{border:"1px solid grey",marginTop:"60px",padding:"10px",borderRadius:"10px",backgroundColor:"grey",color:"white"}}>SEND ME OTP</button>
    </div>
  )
}
