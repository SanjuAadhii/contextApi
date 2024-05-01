import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import img from "./assets/images.jpeg"
function Bookdetails({currProduct}) {
  return (
    <div className='row d-flex justify-content-start'>
         <div className='col-6'>
            <img src={img} className="img-thumbnail" alt="..."></img>
            </div>
            <div className='col-6'>
             <h3>{currProduct[0].title}</h3> 
            <h6>Discription</h6>
            <p>{currProduct[0].description}</p>

            </div>
    </div>
  )
}

export default Bookdetails