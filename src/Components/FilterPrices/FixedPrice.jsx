import React, { useState } from 'react'
import "./FixedPrice.css"
import { FiDollarSign } from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu";
const FixedPrice = () => {

  const [Minicon ,setMinicon] = useState("true")
  const [Maxicon ,setMaxicon] = useState("true")

const MinMoneyIcon  = () =>{
  console.log("hii");
  setMinicon(!Minicon)
  // setMaxicon(!Maxicon)
  console.log(Minicon);
}

const MaxMoneyIcon  = () =>{
  console.log("hii");
  // setMinicon(!Minicon)
  setMaxicon(!Maxicon)
  console.log(Minicon);
}



  return (
    <>
    <div className="filter-header  d-flex justify-content-between align-items-end mb-3 mt-4">
    <span className="d-inline-block fs-5 fw-bolder">
    Fixed Price
    </span>
    <span
      className="artist clear-btn fs-5 fw-semibold"
      style={{ color: "blue" }}
    >
      Clear
    </span>
  </div> 
  <div className="artist-inputs  ">
    <ul className="mb-0">
     
      <li>
        <div className="fixed-price p-1">
          <div className="fixed-price-lable">
            <span className="fs-5">min</span>
          </div>
          <div className="fixed-price-input d-flex justify-content-between align-items-center">
            <span>
              
              <FiDollarSign size={20} style={{display:Minicon ? "block":"none"} } />
              <LuIndianRupee size={20}style={{display:Minicon ? "none":"block"} }  />
              </span>
          
          <input type="text" name="" id="" style={{width:"80%"}}/>
          <select className="border-0" name="" id="" onChange={MinMoneyIcon}>
            <option className="border-0" value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
          {/* <span className="fs-4 ">USD</span> */}
          </div>
        </div>
      </li>
    </ul>
  </div>
  {/* Max input */}
  <div className="artist-inputs  ">
    <ul className="">
     
      <li>
        <div className="fixed-price p-1">
          <div className="fixed-price-lable">
            <span className="fs-5">max</span>
          </div>
          <div className="fixed-price-input d-flex justify-content-between align-items-center">
          <span>
              
              <FiDollarSign size={20} style={{display:Maxicon ? "block":"none"} } />
              <LuIndianRupee size={20}style={{display:Maxicon ? "none":"block"} }  />
              </span>
          
          <input type="text" name="" id="" style={{width:"80%"}}/>
          <select className="border-0" name="" id="" onChange={MaxMoneyIcon}>
            <option className="border-0" value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
          {/* <span className="fs-4 ">USD</span> */}
          </div>
        </div>
      </li>
    </ul>
  </div>
  </>
  )
}

export default FixedPrice



