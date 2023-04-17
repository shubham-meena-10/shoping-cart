import React from 'react'
import error_img from '../Assests/error_img.svg'
const ErrorPage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
      <div>
        <div className='row d-none d-md-block'>
          <img src={error_img} height={'500px'} width={'500px'} alt="" />
        </div>
        <div className='row'>
          <h1 className='text-center' style={{ color: "#5A607F", fontSize: "50px" }}>Something Went Wrong <br />Try Again</h1>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage