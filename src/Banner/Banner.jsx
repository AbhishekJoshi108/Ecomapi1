import React from 'react'
import img1 from '../images/pexels-arnie-chou-965632.jpg'
import "./Banner.css"

const Banner = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row ">
          <div className=" col-md-12 imag-2">
            <div className="bantext-1">
              <h1 className=''>The Best Attire for <br /> Best People's<br /><span>Choose Your Design's</span></h1>
            </div>

          </div>
          {/* <img src={img1} className='img-fluid w-100' alt=""  /> */}
        </div>
      </div>

    </>
  )
}

export default Banner
