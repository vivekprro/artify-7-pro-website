import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer'

const RefundCancelation = () => {
  return (
    <>
    <Header/>
    <section >
        <div className="container my-4">
        <div className="row">
            <div className="col">
            <h1 className='m-4'>Cancellation Policy</h1>
            <ol>
                <h3></h3>
                <p>We understand that sometimes circumstances change, and you may need to cancel your service with us. Please note the following:</p>
            
           
               
                <li>If you cancel your service within 24 hours of signing up, we will provide a full refund.
                </li>
                <li>If you cancel your service after 24 hours of signing up, we will not provide a refund.</li>
                <li>If you cancel your service mid-subscription period, we will not provide a refund for the remaining period.</li>


            </ol>
            <p>Please contact our support team at [insert contact email or form] to request cancellation. </p>
            </div>
        </div>
    </div>       
    </section>
    <Footer/>
    </>
  )
}

export default  RefundCancelation