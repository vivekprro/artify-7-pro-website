import React from 'react'
import "./AskForm.css"
import Bgvideo from '../Bgvideo/Bgvideo'
import InnerHeading from "../InnerHeading/InnerHeading";
import Footer from "../Footer";

const AskForm = ({path}) => {

  return (
   <>

   <Bgvideo/>

   <InnerHeading path={path}/>
    <div className="container ask-container ">
      <div className="row mx-auto my-auto align-items-center h-100">
        <div className="col-md-6 m-auto border ask-form ">
           <form className=''>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Number</label>
    <input type="text" class="form-control" id="" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Location</label>
    <input type="text" class="form-control" id="" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    {/* <label for="exampleInputEmail1" class="form-label">Query</label>
    <textarea class="form-control" aria-label="With textarea"></textarea> */}
    <label for="exampleInputEmail1" class="form-label">Query</label>
    <div class="form-floating">
    
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Ask...</label>
    </div>
  </div>

  <div class="mb-3 text-center">
  <button type="submit" class="btn btn-primary-dark align-center">Submit</button>
  </div>

 
 
</form>
        </div>
        </div>
    </div>
    <Footer/>
  
  
</>
  )
}

export default AskForm