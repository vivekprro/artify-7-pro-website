import React from 'react'
import "./InnerHeading.css"
import { IoMail } from "react-icons/io5";

import { Link } from 'react-router-dom';


const InnerHeading = ({path}) => {
  return (
    <>
        <div className="inner-heading">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h1>{path}</h1>
                    </div>
                    <div className="col-md-2">
                        <div className="btn-page-header">
                            <Link to="/contactus" className=' btn-warning'  style={{background:"transparent", border:"3px solid white"}}>
                            <IoMail size={15} className='me-2' />
                            Quick Enquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default InnerHeading