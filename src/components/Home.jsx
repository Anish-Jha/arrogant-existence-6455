import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {SlHeart} from "react-icons/sl"
import TopSlider from './TopSlider'
import {MdArrowForwardIos} from "react-icons/md"
export default function Home(){
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
    <div>
    <div style={{position:"sticky",top:"0",width:"100%",zIndex:"100",}}>
    <Navbar/>
    </div>
      <div>
          <TopSlider/>
      </div>
    <div style={{
      background:
      "url(https://media.sugarcosmetics.com/upload/homePageBackGroundTexture.jpg)",
      width:"100%",
      // height:"auto",
      marginTop:"-70px",
      padding:"20px",
      height:"500px",
      marginBottom:"30px",
    }}>
                <h4 style={{ color: "#FC2779",display:"inline" }}>───</h4> <h1 style={{display:"inline" ,fontWeight:"500", color:"white", fontSize:"22px"}}>BESTSELLERS </h1><h4 style={{ color: "#FC2779",display:"inline" }}>───</h4>
                <div style={{display:"flex",justifyContent:"center",gap:"35px",marginTop:"20px",marginBottom:"20px",}}>
                    <div style={{width:"250px",borderRadius:"20px",height:"380px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", }}>
                        <img style={{margin:"auto",height:"60%",width:"70%",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg%3Fv%3D1640178644&w=256&q=75" alt=""/>
                        <p style={{fontSize:"13px"}}>Ace of Face Foundation Stick</p>
                        <h5 style={{marginBottom:"10px"}}>₹999</h5>
                        
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"45px",backgroundColor:"black",color:"white"}}>SELECT SHADE</button>
                    </div>
                    <div style={{width:"250px",borderRadius:"20px",height:"380px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                    <img style={{height:"60%",width:"70%",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg%3Fv%3D1657814596&w=256&q=75" alt=""/>
                        <p style={{fontSize:"13px"}}>SUMDGE ME MINI LIQUID</p>
                        <h5 style={{marginBottom:"10px"}}>₹799</h5>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"45px",backgroundColor:"black",color:"white"}}>ADD TO CART</button>
                    </div>
                    <div style={{width:"250px",borderRadius:"20px",height:"380px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                    <img style={{height:"60%",width:"70%",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg%3Fv%3D1657257149&w=256&q=75" alt=""/>
                        <p style={{fontSize:"13px"}}>BASE OF GLORY POLE</p>
                        <h5 style={{marginBottom:"10px"}}>₹799</h5>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"45px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button> 
                    </div>
                    <div style={{width:"250px",borderRadius:"20px",height:"380px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                    <img style={{height:"60%",width:"70%",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg%3Fv%3D1645608270&w=256&q=75" alt=""/>
                        <p style={{fontSize:"13px"}}>MATE ATTACK TRANSPROOF</p>
                        <h5 style={{marginBottom:"10px"}}>₹699</h5>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"45px",backgroundColor:"black",color:"white"}}>SELECT SHADE</button>
                    </div>
                </div>
            </div>

            <div>
            <h4 style={{ color: "#FC2779",display:"inline" }}>───</h4> <h1 style={{display:"inline",fontWeight:"600", color:"#212512", fontSize:"22px"}}>HOT DEALS </h1><h4 style={{ color: "#FC2779",display:"inline" }}>───</h4>
                <div style={{display:"flex",marginTop:"10px",justifyContent:"center",gap:"20px",marginBottom:"20px"}}>
                      <div style={{height:"250px",width:"400px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",}}>
                        <img style={{height:"100%",width:"100%",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8bc85906-26ba-41ed-a1b0-2ff7190ba9f8.jpg&w=1920&q=75" alt=""/>
                      </div>
                      <div style={{height:"250px",width:"400px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",}}>
                      <img style={{height:"100%",width:"100%",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F6d8f9700-ca7f-44ae-bdef-68cc5dc2ded1.jpg&w=1920&q=75" alt=""/>
                      </div>
                      <div style={{height:"250px",width:"400px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",}}>
                      <img style={{height:"100%",width:"100%",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F90a0f8b4-0ae4-4f0c-853d-ca54522fb509.jpg&w=1920&q=75" alt=""/>
                      </div>
                </div>
            </div>


            <div>
                <h1 style={{fontWeight:"600", marginTop:"50px", color:"#212512", fontSize:"22px"}}>─── JUST-IN ───</h1>
                <div style={{display:"flex",marginTop:"20px",marginBottom:"20px",justifyContent:"center",gap:"30px",}}>
                <div style={{height:"380px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",borderRadius:"10px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/414584697-rakhi-gift-kit-wbg-images-1.jpg?v=1658505710" alt=""/>
                        <h4 style={{fontSize:"15px"}}>RAKHI GIFT KIT</h4>
                        <p style={{marginBottom:"10px"}}>₹ 1899</p>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"40px",backgroundColor:"black",color:"white"}}>SHOP NOW</button>
                    </div>
                    <div style={{height:"380px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",borderRadius:"10px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/Vineeta_s-Favourite-Makeup-kit---WBG-images.jpg?v=1657555460" alt=""/>
                        <h4 style={{fontSize:"15px"}}>VINEETA's FAVOURITE MAKEUP KIT </h4>
                        <p style={{marginBottom:"10px"}}>₹ 2999</p>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"40px",backgroundColor:"black",color:"white"}}>SHOP NOW</button>
                    </div>
                    <div style={{height:"380px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",borderRadius:"10px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108" alt=""/>
                        <h4 style={{fontSize:"15px"}}>CONTOUR DE FORCE PALLETE</h4>
                        <p style={{marginBottom:"10px"}}>₹ 1099</p>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"40px",backgroundColor:"black",color:"white"}}>SELECT SHADE</button>
                    </div>
                    <div style={{height:"380px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",borderRadius:"10px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F448725743-christmas-makeup-kit-wbg-main-image.jpg%3Fv%3D1669728324&w=256&q=75" alt=""/>
                        <h4 style={{fontSize:"15px"}}>MONSOON MAKEUP KIT</h4>
                        <p style={{marginBottom:"10px"}}>₹ 1099</p>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"40px",backgroundColor:"black",color:"white"}}>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div style={{marginBottom:"30px", marginTop:"70px", }}>
                <h5 style={{fontWeight:"600",marginBottom:"20px"}}>─── SHUKAR HAI, SUGAR HAI ───</h5>
                <iframe style={{ borderRadius: "10px" }}  width="1093" height="420" src="https://www.youtube.com/embed/vrhYCqgLnDs"  title="SUGAR's New TV Commercial ft. Ranveer & Tamannaah" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <h5 style={{fontWeight:"600", marginTop:"70px"}}>─── TOP PICKS OF THE WEEK ───</h5>
                <div style={{display:"flex",marginTop:"20px",justifyContent:"center",gap:"30px",marginBottom:"20px"}}>
                      <div style={{height:"270px",width:"380px"}}>
                        <img style={{height:"100%",width:"100%",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F4849cf44-c55c-4224-ba06-9dd0a5f48b67.gif&w=1920&q=75" alt=""/>
                      </div>
                      <div style={{height:"270px",width:"380px"}}>
                      <img style={{height:"100%",width:"100%",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg&w=1920&q=75" alt=""/>
                      </div>
                      <div style={{height:"270px",width:"380px"}}>
                      <img style={{height:"100%",width:"100%",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9f9d2095-f019-4bb5-b961-db87fab439f6.jpg&w=1920&q=75" alt=""/>
                      </div>
                </div>
            </div>
            <div>
                <h5 style={{fontWeight:"600", marginTop:"70px"}}>─── GIFTING ───</h5>
                <div style={{display:"flex",marginTop:"20px",marginBottom:"40px",justifyContent:"center",gap:"30px"}}>
                <div style={{borderRadius:"10px",height:"380px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",width:"70%"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F399160329-9-to-5-makeup-kit-wbg-01.jpg%3Fv%3D1654013564&w=256&q=75" alt=""/>
                        <p>MATTE LIPSTICK MINIS SET</p>
                        <h4>₹1099</h4>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"60%",height:"40px",backgroundColor:"black",color:"white", fontSize:"14px"}}>CHOOSE PRODUCTS</button>
                    </div>
                    <div style={{borderRadius:"10px",height:"380px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/04_b475d6dd-c07b-43b0-9f78-c989b2fe4f6d.jpg?v=1659446263" alt=""/>
                        <p style={{fontSize:"15px"}}>WEDDING MAKEUP KIT </p>
                        <h4 >₹1699</h4>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"60%",height:"40px",backgroundColor:"black",color:"white", fontSize:"14px"}}>CHOOSE PRODUCTS</button>
                    </div>
                    <div style={{borderRadius:"10px",height:"380px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",width:"70%"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg%3Fv%3D1657814596&w=256&q=75" alt=""/>
                        <p style={{fontSize:"13.5px"}}> MINI LIQUID LIPSTICK SET-POWDER</p>
                        <h4>₹799</h4>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"60%",height:"40px",backgroundColor:"black",color:"white", fontSize:"14px"}}>SHOP NOW</button>
                    </div>
                    <div style={{borderRadius:"10px",height:"380px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg?v=1659517990" alt=""/>
                        <p>DATE NIGHT MAKEUP KIT </p>
                        <h4 >61599</h4>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"60%",height:"40px",backgroundColor:"black",color:"white", fontSize:"14px"}}>CHOOSE PRODUCTS</button>
                    </div>                    
                </div>
            </div>
            <div>
                <h5 style={{fontWeight:"600",marginBottom:"25px", marginTop:"70px"}}>─── REFER YOUR FRIENDS ───</h5>
                <img style={{height:"300px", width:"90%",marginBottom:"20px", borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8bfe8bb4-002d-4097-a773-6af33325a594.jpg&w=1920&q=75" alt=""/>
            </div>
            <div style={{
                // border:"1px solid red",
                height:"550px",
                background:
              "url(https://media.sugarcosmetics.com/upload/VTOBackgroungTexture.png)",
                color:"white",
                padding:"10px",
                marginTop:"50px",

            }}>
                <h4 style={{fontWeight:"600", marginTop:"30px"}}>─── SUPER SAVERS ───</h4>
                <div style={{display:"flex",marginTop:"20px",marginBottom:"20px",justifyContent:"center",gap:"30px"}}>
                <div style={{color:"black",backgroundColor:"white",borderRadius:"10px",height:"390px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",width:"70%"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-smudge-me-not-liquid-lipstick-matte-as-hell-crayon-lipstick-value-set-14600053391443.jpg%3Fv%3D1619119204&w=256&q=75" alt=""/>
                        <p>KOHL+BROW DEFINER</p>
                        <h5>₹599</h5>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{borderRadius:"5px",marginRight:"10px",marginTop:"5px",fontSize:"14px",float:"right",width:"60%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                    </div>
                    <div style={{color:"black",backgroundColor:"white",borderRadius:"10px",height:"390px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",width:"70%"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FValue-Set-11---WBG-Images_1.jpg%3Fv%3D1659456262&w=256&q=75" alt=""/>
                        <p>KOHL+LENGTHNING MASCARA</p>
                        <h5>₹599</h5>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{borderRadius:"5px",marginRight:"10px",marginTop:"5px",fontSize:"14px",float:"right",width:"60%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                    </div>
                    <div style={{color:"black",backgroundColor:"white",borderRadius:"10px",height:"390px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",width:"70%"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F2_bb525208-246a-4f40-b57f-d88372708398.jpg%3Fv%3D1655308814&w=256&q=75" alt=""/>
                        <p>LIP CRAYON + LIQUID LIPSTICK</p>
                        <h5>₹1149</h5>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{borderRadius:"5px",marginRight:"10px",marginTop:"5px",fontSize:"14px",float:"right",width:"60%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                    </div>
                    <div style={{color:"black",backgroundColor:"white",borderRadius:"10px",height:"390px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",width:"70%"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F08.jpg%3Fv%3D1630511040&w=256&q=75" alt=""/>
                        <p>GLAM EYE MAKEUP VALUE SET </p>
                        <h5>₹1599</h5>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{borderRadius:"5px",marginRight:"10px",marginTop:"5px",fontSize:"14px",float:"right",width:"60%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                    </div>                    
                </div>
            </div>
            <div style={{marginTop:"50px"}}>
                <h5>─── NEWLY LAUNCHED ───</h5>
                <img width={"90%"} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff190c764-84cf-4eea-a381-8b701be65852.gif&w=1920&q=75" alt="" />
            </div>
            <div style={{marginBottom:"20px", marginTop:"20px"}}>
                <h5 style={{fontWeight:"500",marginBottom:"20px"}}>─── THIS OR THAT ───</h5>
                <div style={{display:"flex",justifyContent:"center",gap:"70px"}}>
                    <img  style={{height:"375px",width:"580px",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7869ecd2-e867-443e-8116-fcbef55cacd8.jpg&w=1920&q=75" alt=""/>
                    <img  style={{height:"375px",width:"580px",borderRadius:"10px"}}src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fcd4ea1cf-e663-4cd8-8ff0-fdd91012a232.jpg&w=1920&q=75" alt=""/>
                </div>
            </div>

            <div>
                <h4 style={{fontWeight:"400", marginTop:"70px"}}>─── SKINCARE BASICS ───</h4>
                <div style={{display:"flex",marginTop:"20px",marginBottom:"20px",justifyContent:"center",gap:"30px"}}>
                <div style={{borderRadius:"10px",height:"390px",width:"230px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",borderRadius:"10px",width:"60%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/CCLipScrubWBG-3.jpg?v=1628610315" alt=""/>
                        <p style={{fontSize:"13px"}}>COFFEE CULTURE LIP SCRUB</p>
                        <h5>₹299</h5>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{borderRadius:"5px",marginRight:"10px",marginTop:"5px",fontSize:"14px",float:"right",width:"60%",height:"40px",backgroundColor:"black",color:"white"}}>ADD TO CART</button>
                    </div>
                    <div style={{borderRadius:"10px",height:"390px",width:"230px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",borderRadius:"10px",width:"60%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/Coffee-culture-cleansing-balm-stick-01.jpg?v=1643375708" alt=""/>
                        <p style={{fontSize:"13px"}}>COFFEE CLEANSING BALM STICK</p>
                        <h5>₹699</h5>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{borderRadius:"5px",marginRight:"10px",marginTop:"5px",fontSize:"14px",float:"right",width:"60%",height:"40px",backgroundColor:"black",color:"white"}}>ADD TO CART</button>
                    </div>
                    <div style={{borderRadius:"10px",height:"390px",width:"230px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",borderRadius:"10px",width:"60%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/Hyaluronic-Serum-3_1.jpg?v=1626423730" alt=""/>
                        <p style={{fontSize:"13px"}}>AQUAHOLIC HYLURONIC SERUM</p>
                        <h5>₹499</h5>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{borderRadius:"5px",marginRight:"10px",marginTop:"5px",fontSize:"14px",float:"right",width:"60%",height:"40px",backgroundColor:"black",color:"white"}}>ADD TO CART</button>
                    </div>
                    <div style={{borderRadius:"10px",height:"390px",width:"230px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"60%",borderRadius:"10px",width:"60%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771" alt=""/>
                        <p style={{fontSize:"13px"}}>SUNSCREEN SPF35 PA++ </p>
                        <h5>₹599</h5>
                        <span style={{border:"1px solid black",padding:"10px ",borderRadius:"10px",height:"45px",cursor:"Pointer",}}><SlHeart style={{fontSize:"30px"}}/></span>
                        <button style={{borderRadius:"5px",marginRight:"10px",marginTop:"5px",fontSize:"14px",float:"right",width:"60%",height:"40px",backgroundColor:"black",color:"white"}}>SELECT SHADE</button>
                    </div>                    
                </div>
            </div> 
                  <div style={{marginBottom:"20px", marginTop:"70px"}}>
                    <h5 style={{fontWeight:"600",marginBottom:"20px"}}>─── SUGAR BEAUTY BLOG ───</h5>
                    <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>
                        <img style={{borderRadius:"10px",height:"250px",width:"400px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F56806b0c-6def-48e5-a932-ed33f169e55c.gif&w=1920&q=75" alt=""/>
                        <img style={{borderRadius:"10px",height:"250px",width:"400px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F37b0e6d9-5f39-4065-8d52-a17541ec35b0.jpg&w=1920&q=75" alt=""/>
                        <img style={{borderRadius:"10px",height:"250px",width:"400px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fe2c42629-e179-4458-9f06-0f92b36f6e9f.jpg&w=1920&q=75" alt=""/>
                    </div>
                  </div> 

            <div style={{marginBottom:"20px", marginTop:"70px"}}>
                <h5 style={{fontWeight:"600",marginBottom:"20px"}}>─── EXPLORE ───</h5>
                <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>
                    <img style={{borderRadius:"10px",height:"180px",width:"290px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F97722164-55b4-4030-a9f6-0219a9575a24.jpg&w=1920&q=75" alt=""/>
                    <img style={{borderRadius:"10px",height:"180px",width:"290px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F52b4f85e-f9e8-465a-a9a4-6f11e6b407aa.jpg&w=1920&q=75" alt=""/>
                    <img style={{borderRadius:"10px",height:"180px",width:"290px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F52b4f85e-f9e8-465a-a9a4-6f11e6b407aa.jpg&w=1920&q=75" alt=""/>
                    <img style={{borderRadius:"10px",height:"180px",width:"290px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F52b4f85e-f9e8-465a-a9a4-6f11e6b407aa.jpg&w=1920&q=75" alt=""/>
                </div>
            </div>
            <div style={{marginTop:"70px",}}>
                <h5>─── RECENTLY VIEWED ───</h5>
                <div style={{
                    margin:"auto",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                    width:"250px",
                    borderRadius:"10px",
                    height:"380px",
                    marginTop:"30px",
                }}>
                    <img style={{borderRadius:"10px",width:"170px", height:"60%"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FVineeta_s-Favourite-Makeup-kit---WBG-images.jpg%3Fv%3D1669626013&w=256&q=75" alt="" />
                    <p>Vineeta's Favourite Makeup Kit</p>
                    <h5>₹2999</h5>
                    <button style={{borderRadius:"5px",marginTop:"20px",fontSize:"14px",width:"80%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                </div>
            </div>
                <div style={{border:"1px solid lightgrey", width:"95%", margin:"auto", marginTop:"20px", marginBottom:"20px"}}></div>
                
    </div>
        <div style={{textAlign:"left", width:"95%", margin:"auto"}}>
            <p style={{fontWeight:"600", color:"#212121"}}>READ MORE ABOUT SUGAR COSMETICS <MdArrowForwardIos style={{
                fontSize:"20px", color:"#fc2779", fontWeight:"800"}}/></p>
            <div style={{
                margin:"auto",
                textAlign:"center",
                width:"70%",
                height:"300px",
                marginTop:"40px"
            }}>
                <h3>- LET’S STAY IN TOUCH -</h3>
                <p style={{color:"#212121", fontSize:"18px", }}>Get the latest beauty tips straight to your inbox. Can’t wait to connect!</p>
                <br />
                <input style={{width:"550px",height:"40px",paddingLeft:"10px",borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", outline:"none", border:"1px solid grey"}} type="email" name="" id="" placeholder='Enter Email' />
                <button style={{marginBottom:"2px",height:"40px", width:"130px",borderTopRightRadius:"10px", borderBottomRightRadius:"10px",color:"white", backgroundColor:"black"}}>SUBSCRIBE</button>
            </div>
        </div>
     <div>
     <Footer/>
     </div>
    </div>
  )
}
