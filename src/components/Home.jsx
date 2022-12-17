import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {SlHeart} from "react-icons/sl"
import TopSlider from './TopSlider'
export default function Home(){
  return (
    <div>
    <div>
    <Navbar/>
    </div>
    <div>
      <div>
          <TopSlider/>
      </div>
    <div style={{
      background:"linear-gradient(#000066  , rgb(0, 0, 139))",
      width:"100%",
      // height:"auto",
      marginTop:"-70px",
      padding:"20px",
      height:"500px",
    }}>
                <h1 style={{fontWeight:"500", color:"white", fontSize:"22px"}}>- BESTSELLERS -</h1>
                <div style={{display:"flex",justifyContent:"center",gap:"35px",marginTop:"20px",marginBottom:"20px",}}>
                    <div style={{width:"250px",borderRadius:"20px",height:"380px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", }}>
                        <img style={{margin:"auto",height:"60%",width:"70%",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg%3Fv%3D1640178644&w=256&q=75" alt=""/>
                        <p style={{fontSize:"13px"}}>METTLE PRIMING BALM</p>
                        <h5 style={{marginBottom:"10px"}}>₹999</h5>
                        <span style={{
                          border:"1px solid black",
                          padding:"10px ",
                          borderRadius:"10px",
                          

                        }}><SlHeart style={{fontSize:"30px"}}/></span><button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"45px",backgroundColor:"black",color:"white"}}>SELECT SHADE</button>
                    </div>
                    <div style={{width:"250px",borderRadius:"20px",height:"380px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                    <img style={{height:"60%",width:"70%",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg%3Fv%3D1657814596&w=256&q=75" alt=""/>
                        <p style={{fontSize:"13px"}}>AIR KISS POWDER LIPSTICK</p>
                        <h5 style={{marginBottom:"10px"}}>₹799</h5>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"45px",backgroundColor:"black",color:"white"}}>ADD TO CART</button>
                    </div>
                    <div style={{width:"250px",borderRadius:"20px",height:"380px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                    <img style={{height:"60%",width:"70%",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg%3Fv%3D1657257149&w=256&q=75" alt=""/>
                        <p style={{fontSize:"13px"}}>LIP ZIP MATTE TOPPER</p>
                        <h5 style={{marginBottom:"10px"}}>₹799</h5>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"45px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button> 
                    </div>
                    <div style={{width:"250px",borderRadius:"20px",height:"380px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                    <img style={{height:"60%",width:"70%",borderRadius:"10px"}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg%3Fv%3D1645608270&w=256&q=75" alt=""/>
                        <p style={{fontSize:"13px"}}>GLORY SHINE PRIMER</p>
                        <h5 style={{marginBottom:"10px"}}>₹699</h5>
                        <button style={{float:"right",marginRight:"10px",borderRadius:"5px",width:"65%",height:"45px",backgroundColor:"black",color:"white"}}>SELECT SHADE</button>
                    </div>
                </div>
            </div>

            <div>
                <h1 style={{fontWeight:"400", marginTop:"50px"}}>HOT DEALS</h1>
                <div style={{display:"flex",marginTop:"10px",justifyContent:"center",gap:"20px",marginBottom:"20px"}}>
                      <div style={{height:"300px",width:"400px"}}>
                        <img style={{height:"100%",width:"100%"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/24c98a72-c8dc-45ef-b5d5-0cf61b4fc244.jpg" alt=""/>
                      </div>
                      <div style={{height:"300px",width:"400px"}}>
                      <img style={{height:"100%",width:"100%"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/9ab04656-0732-439b-ad97-d765a0b9d070.gif" alt=""/>
                      </div>
                      <div style={{height:"300px",width:"400px"}}>
                      <img style={{height:"100%",width:"100%"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/1980ff8f-05fc-4912-b58b-e53350ef9fbf.jpg" alt=""/>
                      </div>
                </div>
            </div>
            <div>
                <h1 style={{fontWeight:"400", marginTop:"50px"}}>JUST-IN</h1>
                <div style={{display:"flex",marginTop:"20px",marginBottom:"20px",justifyContent:"center",gap:"30px"}}>
                <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/414584697-rakhi-gift-kit-wbg-images-1.jpg?v=1658505710" alt=""/>
                        <h4>RAKHI GIFT KIT</h4>
                        <p style={{marginBottom:"10px"}}>₹ 1899</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>SHOP NOW</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/Vineeta_s-Favourite-Makeup-kit---WBG-images.jpg?v=1657555460" alt=""/>
                        <h4 style={{fontSize:"15px"}}>VINEETA's FAVOURITE MAKEUP KIT </h4>
                        <p style={{marginBottom:"10px"}}>₹ 2999</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>SHOP NOW</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108" alt=""/>
                        <h4>CONTOUR DE FORCE PALLETE</h4>
                        <p style={{marginBottom:"10px"}}>₹ 1099</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>SELECT SHADE</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/Monsoon-Makeup-Kit---WBG-Images_1_66ba2237-0dad-42dc-88ea-c2d45555dd6a.jpg?v=1657814549" alt=""/>
                        <h4>MONSOON MAKEUP KIT</h4>
                        <p style={{marginBottom:"10px"}}>₹ 1099</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div style={{marginBottom:"30px", marginTop:"70px"}}>
                <h1 style={{fontWeight:"400",marginBottom:"20px"}}>VINEETA'S FAVOURITE MAKEUP KIT</h1>
                <iframe width="1230" height="500" src="https://www.youtube.com/embed/-_17JnSzUs0" title="Vineeta's Favourite Makeup Kit | SUGAR Cosmetics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <h1 style={{fontWeight:"400", marginTop:"70px"}}>TOP PICKS OF THE WEEK</h1>
                <div style={{display:"flex",marginTop:"10px",justifyContent:"center",gap:"20px",marginBottom:"20px"}}>
                      <div style={{height:"300px",width:"400px"}}>
                        <img style={{height:"100%",width:"100%"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/0b0876e2-a751-4ee2-b6cd-1c25a0da8d56.jpg" alt=""/>
                      </div>
                      <div style={{height:"300px",width:"400px"}}>
                      <img style={{height:"100%",width:"100%"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/55788463-1185-4aaa-8897-dff418d9743f.jpg" alt=""/>
                      </div>
                      <div style={{height:"300px",width:"400px"}}>
                      <img style={{height:"100%",width:"100%"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/84f0d36c-381f-4c62-8702-b0059b13094a.jpg" alt=""/>
                      </div>
                </div>
            </div>
            <div>
                <h1 style={{fontWeight:"400", marginTop:"70px"}}>GIFTING</h1>
                <div style={{display:"flex",marginTop:"20px",marginBottom:"40px",justifyContent:"center",gap:"30px"}}>
                <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1623073051" alt=""/>
                        <h4>MATTE LIPSTICK MINIS SET</h4>
                        <p style={{marginBottom:"10px"}}>₹ 1099</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/04_b475d6dd-c07b-43b0-9f78-c989b2fe4f6d.jpg?v=1659446263" alt=""/>
                        <h4 style={{fontSize:"15px"}}>WEDDING MAKEUP KIT </h4>
                        <p style={{marginBottom:"10px"}}>₹ 1699</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108" alt=""/>
                        <h4 style={{fontSize:"13.5px"}}> MINI LIQUID LIPSTICK SET-POWDER</h4>
                        <p style={{marginBottom:"13px"}}>₹ 799</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>SHOP NOW</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg?v=1659517990" alt=""/>
                        <h4>DATE NIGHT MAKEUP KIT </h4>
                        <p style={{marginBottom:"10px"}}>₹ 1599</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                    </div>                    
                </div>
            </div>
            <div>
                <h1 style={{fontWeight:"400",marginBottom:"25px", marginTop:"70px"}}>REFER YOUR FRIENDS</h1>
                <img style={{height:"350px", width:"90%",marginBottom:"20px"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/5bd42d33-5894-4c9e-b7e8-ca4ceca79945.jpg" alt=""/>
            </div>
            <div>
                <h1 style={{fontWeight:"400", marginTop:"50px"}}>SUPER SAVERS</h1>
                <div style={{display:"flex",marginTop:"20px",marginBottom:"20px",justifyContent:"center",gap:"30px"}}>
                <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-kohl-brow-definer-15782934478931.jpg?v=1619152192" alt=""/>
                        <h4>KOHL+BROW DEFINER</h4>
                        <p style={{marginBottom:"10px"}}>₹ 599</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-kohl-lengthening-mascara-15350448160851.jpg?v=1620721080" alt=""/>
                        <h4>KOHL+LENGTHNING MASCARA</h4>
                        <p style={{marginBottom:"10px"}}>₹ 599</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-matte-as-hell-crayon-lipstick-value-set-14600053391443.jpg?v=1619119204" alt=""/>
                        <h4 style={{fontSize:"13.5px"}}>LIP CRAYON + LIQUID LIPSTICK</h4>
                        <p style={{marginBottom:"13px"}}>₹ 1149</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb525208-246a-4f40-b57f-d88372708398.jpg?v=1655308814" alt=""/>
                        <h4>GLAM EYE MAKEUP VALUE SET </h4>
                        <p style={{marginBottom:"10px"}}>₹ 1599</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>CHOOSE PRODUCTS</button>
                    </div>                    
                </div>
            </div>
            <div style={{marginTop:"70px"}}>
                <h1 style={{fontWeight:"400",marginBottom:"30px"}}>NEWLY LAUNCHED</h1>
             {/* < Slider2/> */}
            </div>
            <div style={{marginTop:"-70px",marginBottom:"20px"}}>
                <h1 style={{fontWeight:"400",marginBottom:"20px"}}>THIS OR THAT</h1>
                <div style={{display:"flex",justifyContent:"center",gap:"70px"}}>
                    <img  style={{height:"350px",width:"580px"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/d1b038a4-418a-4309-92b1-9aff3b4393ea.jpg" alt=""/>
                    <img  style={{height:"350px",width:"580px"}}src="https://d32baadbbpueqt.cloudfront.net/Homepage/aacbf133-247d-4ad9-a6ea-4510ab9adf09.jpg" alt=""/>
                </div>
            </div>
            <div>
                <h1 style={{fontWeight:"400", marginTop:"70px"}}>SKINCARE BASICS</h1>
                <div style={{display:"flex",marginTop:"20px",marginBottom:"20px",justifyContent:"center",gap:"30px"}}>
                <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/CCLipScrubWBG-3.jpg?v=1628610315" alt=""/>
                        <h4>COFFEE CULTURE LIP SCRUB</h4>
                        <p style={{marginBottom:"10px"}}>₹ 299</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>ADD TO CART</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/Coffee-culture-cleansing-balm-stick-01.jpg?v=1643375708" alt=""/>
                        <h4>COFFEE CLEANSING BALM STICK</h4>
                        <p style={{marginBottom:"10px"}}>₹ 699</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>ADD TO CART</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/Hyaluronic-Serum-3_1.jpg?v=1626423730" alt=""/>
                        <h4 style={{fontSize:"13.5px"}}>AQUAHOLIC HYLURONIC SERUM</h4>
                        <p style={{marginBottom:"13px"}}>₹ 499</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>ADD TO CART</button>
                    </div>
                    <div style={{height:"320px",width:"250px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                        <img style={{height:"70%",width:"70%"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771" alt=""/>
                        <h4>SUNSCREEN SPF35 PA++ </h4>
                        <p style={{marginBottom:"10px"}}>₹ 599</p>
                        <button style={{width:"100%",height:"40px",backgroundColor:"black",color:"white"}}>SELECT SHADE</button>
                    </div>                    
                </div>
            </div> 
                  <div style={{marginBottom:"20px", marginTop:"70px"}}>
                    <h1 style={{fontWeight:"400",marginBottom:"20px"}}>SUGAR BEAUTY BLOG</h1>
                    <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>
                        <img style={{height:"300px",width:"400px"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/be05f06a-d85f-488a-af73-93eb665cfd72.jpg" alt=""/>
                        <img style={{height:"300px",width:"400px"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/3cdfa4b8-93ee-4c20-89ea-933c4b201819.jpg" alt=""/>
                        <img style={{height:"300px",width:"400px"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/6bf379d6-82d3-4456-8498-20c9314cebba.jpg" alt=""/>
                    </div>
                  </div> 
            <div style={{marginBottom:"20px"}}>
                 <h1 style={{fontWeight:"400",marginBottom:"20px", marginTop:"70px"}}>QUICK TIPS</h1>
                 {/* <Slider3/> */}
            </div>
            <div style={{marginBottom:"20px"}}>
                <h1 style={{fontWeight:"400",marginBottom:"20px"}}>EXPLORE</h1>
                <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
                    <img style={{height:"220px",width:"290px"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/6467c459-adbc-4edf-a00f-144d1dff5ea6.jpg" alt=""/>
                    <img style={{height:"220px",width:"290px"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/7c5a1a8e-bc23-4737-a429-afff37e95d4e.jpg" alt=""/>
                    <img style={{height:"220px",width:"290px"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/d3e932be-f181-4db6-b02f-866c25777902.jpg" alt=""/>
                    <img style={{height:"220px",width:"290px"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/0f06a6f1-f07e-4141-ab7c-4db648fd9b9e.jpg" alt=""/>
                </div>
            </div>
    </div>

     <div>
     <Footer/>
     </div>
    </div>
  )
}
