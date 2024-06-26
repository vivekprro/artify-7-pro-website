import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./RequestForm.css";

const Whatsapp = () => {

  const [visible, setVisible] = useState("true")
  const HandleVisible = () =>{

    setVisible((e)=> !e)

   
     } 
  
  
  
  
  
  return (

    
  
    // <a href="https://www.freepik.com/"><a/>
    <div className="whatsapp-wrappper" style={{bottom: visible? "200px" :"-30px" }}>
      {/* <a
        href="https://wa.me/918285607962?text=Hello, How may I help you ?"
        target="_blank"
        // rel="noopener noreferrer"
      >
        <img src="/images/whatsapp.png" alt="" srcSet="" />
      </a> */}
      <form className="request-form  p-4">
      <div class="mb-3 request-top d-flex justify-content-between align-items-center p-2  ">
    <label for="exampleInputEmail1" class="form-label text-light fs-6 fw-semibold text-uppercase mb-0">Request Call Back</label>
    <span onClick={HandleVisible}><IoIosArrowDown /></span>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Mobile No.</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Mobile No." aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">For</label>
    <input type="" class="form-control" id="" placeholder="Request For" aria-describedby="emailHelp"/>
   
    {/* <label for="exampleInputPassword1" class="form-label">For</label>

    <select name="" id="" className="form-control">
      <option value="">Support</option>
    </select> */}
    {/* <input type="password" class="form-control" id="exampleInputPassword1"/> */}
  </div>
  
  <button type="submit" class="btn btn-primary-dark">Submit</button>
</form>
    </div>
  
  )
};

export default Whatsapp;
