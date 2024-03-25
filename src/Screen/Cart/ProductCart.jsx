import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
const url = 'https://fakestoreapi.com'

function ProductCart() {
  const[cart,setcart] = useState([])
  //read the cart data 
  const readCart = async () => {
    await axios.get(`${url}/carts`)
     .then(res => {
      // console.log(`cart = `,res.data);
      setcart(res.data[0])
     }).catch(err => toast.error(err.response.data.msg))
  }
  useEffect(()=> {
    readCart()
  },[])
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
              
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
