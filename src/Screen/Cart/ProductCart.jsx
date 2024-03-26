import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


function ProductCart() {
  const[cart,setcart] = useState([])
  //read the cart data 
 

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Cart Info</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                // cart && cart.Products.map(item,)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
