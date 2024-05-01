import { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import Bookdetails from './Bookdetails'
import Pricedetails from './Pricedetails'
import UserContext, { UserProvider } from './UserContext'

import MultiDropdown from './MultiDropdown'


function App() {
  
 const {price,setPrice} = useContext(UserContext)
  const [currProduct,setCurrProduct]= useState({})
  
  //This useState stores the title of the product selected in the dropdown
 const [productChange,setProductChange]= useState("")
  const product ={
    "products":[ 
    {
         
      "id": 1,
             "title": "Iphone",
            "description": "An apple mobile which is nothing like apple",
            "price": 50000,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
      
    {
         
      "id": 2,
             "title": "EarPhone",
            "description": "An apple mobile which is nothing like apple",
            "price": 2000,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
        
    {
         
      "id": 3,
             "title": "Airpods",
            "description": "An apple mobile which is nothing like apple",
            "price": 9000,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
        
    {
         
      "id": 4,
             "title": "Charger",
            "description": "An apple mobile which is nothing like apple",
            "price": 4000,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        }
      ]
  };
  
  const handleProductChange =(eventKey)=>{
    setProductChange(eventKey)
    console.log(eventKey)
    
    const val =product.products.filter((item)=>item.title === eventKey)
    console.log(val)
  setProductChange(val[0].title)
   setCurrProduct(val)
   setPrice(val[0].price)
    
}
console.log(price)
{currProduct.length?console.log(true):console.log(false)}



    

  return (
   
    <div className='container'>
      <div style={{textAlign:"center"}}  className='mb-5'>  
       <MultiDropdown handleProductChange={handleProductChange}/>
      </div>
     
      {currProduct.length && 
         <div>
         <div className='row d-flex justify-content-between'>
         {/* Details to display form Api */}
         <div className='col-6 auto d-flex justify-content-start'>
           <Bookdetails currProduct={currProduct}/>
         </div>
         {/* Price and dropdown element */}
         <div className='col-6 auto d-flex justify-content-end'> 
         <Pricedetails currProduct={currProduct} price={price} setPrice={setPrice}/>
         </div>
         
       </div>
       <br/><br/>
         {/* subtotal aand shipping */}
       <div className='row  '>
         <div className='col-6 d-flex justify-content-start '>Subtotal</div>
         <div className='col-6 d-flex justify-content-end '>{`$  ${price}`}</div>
       </div>
       <br/>
       <div className='row '>
         <div className='col-6 d-flex justify-content-start auto'>Shipping</div>
         <div className='col-6 d-flex justify-content-end auto'>Free</div>
       </div>
       <br/><br/>
       <div className='row  '>
         <div className='col-6 d-flex justify-content-start '><h4>Total</h4></div>
         <div className='col-6 d-flex justify-content-end '><h4>{`$ ${price}`}</h4></div>
       </div>
  </div>
      }
       

    </div>
 
     
    
  )
}

export default App
