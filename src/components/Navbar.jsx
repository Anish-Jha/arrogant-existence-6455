import React from 'react';
import logo from './Assets/logo.png'
import { Link } from "react-router-dom";
import {FaSearch, FaUserCircle } from "react-icons/fa";
import {BiShoppingBag} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {TbDiscount2} from "react-icons/tb"
import SubNavbar from "./SubNavbar";

export default function Navbar() {
  return (
    <div>
        <div
        style={{
          display: "flex",
          width: "100%",
          height: "80px",
          backgroundColor: "black",
          color:"white",
        }}
      >
        <img
          style={{ height: "60px", paddingLeft: "30px", paddingTop: "15px", cursor:"pointer", }}
          src={logo}
          alt="Sugar"
        />
        <input
          style={{
            height: "42px",
            width: "560px",
            backgroundColor:"#212121",
            marginLeft: "40px",
            marginTop: "20px",
            border: "1px solid #ffffff",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            paddingLeft: "20px",
            outline:"none",
            color:"white"
          }}
          type="text"
          placeholder='Try "Liquid Lipstick"'
        />
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            height: "42px",
            width: "120px",
            cursor:"pointer",
            marginTop: "20px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            fontSize: "17px"
          }}
        >
        <FaSearch style={{marginBottom:"5px",}}/> Search
        </button>
        <FaUserCircle
          style={{ marginTop: "30px", marginLeft: "180px", fontSize: "20px" }}
        />
        {/* <Link to="/SignIn"> */}
          <a
            style={{
              textDecoration:"none",
              marginLeft: "5px",
              marginTop: "28px",
              color: "white",
              cursor:"pointer",
            }}
            href="./SignIn"
          >
            Login/Register
          </a>
        {/* </Link> */}
        <AiOutlineHeart
          style={{
            cursor:"pointer",
            marginTop: "30px",
            marginLeft: "100px",
            color:"white",
            fontSize: "25px"
          }}
        />
        <BiShoppingBag
          style={{
            cursor:"pointer",
            marginTop: "28px",
            marginLeft: "15px",
            marginRight: "5px",
            color:"white",
            fontSize: "24px",
            outline:"1px solid black"
          }}
        />
        <TbDiscount2
          style={{
            cursor:"pointer",
            marginTop: "29px",
            marginLeft: "10px",
            marginRight: "50px",
            fontSize: "25px",
          }}
        />
      </div>
      <SubNavbar />
    </div>
  )
}
