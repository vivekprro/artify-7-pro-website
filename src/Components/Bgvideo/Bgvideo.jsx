import React from 'react'
import "./Bgvideo.css"

const Bgvideo = () => {
  return (
     <video autoPlay loop id="myVideo">
        <source src="./images/home-video2.mp4" type="video/mp4" />
      </video> 
  )
}

export default Bgvideo