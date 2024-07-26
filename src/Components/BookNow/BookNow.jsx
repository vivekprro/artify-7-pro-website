import React from 'react'
import { Link } from 'react-router-dom'

const BookNow = () => {
  return (
    <>
 {/* ask form */}
                  
             <div className="ask-expert mx-2">
                <span>
                 <Link to="/booknow">
                 <span className="btn btn-primary-dark">

                  Book Now
                  </span>
                 </Link>
                  




                </span>
              </div> 


</>
  )
}

export default BookNow