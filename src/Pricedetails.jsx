import React, { useState } from 'react'

function Pricedetails({currProduct,price,setPrice}) {
    const [value,setValue] = useState(1)
  return (
        <div className='row d-flex justify-content-end'>
        <div className='col-6 '>
            <select name="count" id="" onChange={(e)=>setValue(e.target.value)}>
                <option value={1} >1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
        </div>
        <div className='col-6 '>
         {setPrice(currProduct[0].price*value)}
            <h4>{`$ ${price}`}</h4>
        </div>
        </div>    
  )
}

export default Pricedetails