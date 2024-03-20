import React from 'react'

function Products(props) {
    let {id , title,image,price,category}= props
  return (
   <div className="card">
    <div className="card-front">
        <img src={image?image:''} alt="" className='card-img' />
        <div className="card-content">
            <h6 className="caed-titel">{title}</h6>
            <p className="price">&#8377; {price} </p>
            <p className="category">{category}</p>
        </div>
       
    </div>
    <div className="card-back">
        <button className="btn"> Add to cart <br />
            <i className="bi bi-cart"></i>
        </button>
    </div>
   </div>
  )
}

export default Products