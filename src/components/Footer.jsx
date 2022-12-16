import React from 'react'
import footIcon from './Assets/footIcon.png'
import icons from "./Assets/icons.png"
import app from "./Assets/app.png"
export default function Footer() {
  return (
    <div style={{
      width:"100%",
      height:"auto",
      border:"1px solid black",
      bottom:"0px",
      backgroundColor:"black",
      color:"white",
    }}>
      <div style={{
        position:"relative",
        alignContent:"center",
        width:"150px",
        height:"150px",
        overflow:"clip",
        margin:"auto",
        backgroundColor:"black",
        marginTop:"-80px",
        borderRadius:"70%",
      }}>
       <img style={{
        width:"150px",
       }}
          src={footIcon}
          alt=""
        />
      </div>


        <div>
            <img style={{
              width:"350px",
              cursor:"pointer",
              marginTop:"10px",
            }} src={icons} alt="" />
      </div>
      
      <div style={
        {
          width:"90%",
          border:"2px solid grey",
          borderLeft:"none",
          borderRight:"none",
          height:"80px",
          margin:"auto",
          marginTop:"20px"
        }
      }>
       <div style={{
        margin:"auto",
        width:"80%",
        display:"flex",
        justifyContent:"space-evenly",
        fontSize:"20px",
        height:"100%",
       }}>
        <a style={{
          textDecoration:"none",
          color:"white",
          marginTop:"15px",
        }} href="/">Stores</a>
        <a style={{
          textDecoration:"none",
          color:"white",
          marginTop:"15px",

        }} href="/">Terms & Conditions</a>
        <a style={{
          textDecoration:"none",
          color:"white",
          marginTop:"15px",

        }} href="/">Returns</a>
        <a style={{
          textDecoration:"none",
          color:"white",
          marginTop:"15px",

        }} href="/">FAQs</a>
        <a style={{
          textDecoration:"none",
          color:"white",
          marginTop:"15px",

        }} href="/">About Us</a>
       </div>
      </div>

      <div style={{
        width:"80%",
        margin:"auto",
        marginTop:"20px",
      }}>
        <p style={{
          fontSize:"24px",
          textAlign:"left",
          marginBottom:"25px",
        }}>GET IN TOUCH</p>
        <div style={{
          display:"flex",
          justifyContent:"space-between",
          
        }}>
         <div style={{
          textAlign:"left",
         }}>
         <h5>
             Call us at
            </h5>
            <p style={{
              marginTop:"15px",
              color:"grey",
              fontWeight:"600",
              fontSize:"18px"

            }}>1800-209-9933
              <br />
              Monday to Friday : 9 AM to 7 PM
            </p>
         </div>

         <div style={{
          textAlign:"left",
         }}><h5>
         Support
        </h5>
        <p style={{
             
              color:"grey",
              fontWeight:"600",
              fontSize:"18px"

            }}>
              hello@sugarcosmetics.com
            </p></div>

         <div style={{
          textAlign:"left",
         }}> <h5>
         Careers
        </h5><p style={{
            
              color:"grey",
              fontWeight:"600",
              fontSize:"18px"

            }}>
              We're hiring!
            </p></div>

         <div style={{
          textAlign:"left",
         }}> <h5>
         Press & Media
        </h5><p style={{
             
              color:"grey",
              fontWeight:"600",
              fontSize:"18px"

            }}>
              pr@sugarcosmetics.com
            </p></div>

         <div style={{
          textAlign:"left",
         }}> <h5>
         Influencer Collab
        </h5><p style={{
        
              color:"grey",
              fontWeight:"600",
              fontSize:"18px"

            }}>
              Join us
            </p></div>
        </div>
      </div>
      <div style={{
        borderBottom:"2px solid grey",
        width:"90%",
        margin:"auto",
      }}></div>

      <div style={{
        padding:"15px",
        display:"flex",
        justifyContent:"center",
        gap:"20px",
        borderBottom:"2px solid grey"
              }}>
      <div>
      <h5>
        GET THE NEW SUGAR APP TODAY!
        </h5>
      <p style={{      
        color:"grey",
        fontSize:"14px",
        marginLeft:"-80px"
      }}>
        Tap into a better shopping experience.
      </p>
      </div>
      <div>
        <img src={app} alt="" />
      </div>
      </div>
      <div style={{
        padding:"10px",
      }}>
      <p>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</p>
      </div>
    </div>
  )
}
