import React, { createContext, useMemo, useState } from 'react'

//context instance
export const CartContext = createContext()

function CartProvider(props) {
    const [cart,setcart] = useState(() => {
        const storedCart = localStorage.getItem("cart")
        return storedCart ? JSON.parse(storedCart): []
    })
    //memorized value of state
    const cartData = useMemo(() => ({
        cart
    }),[cart] )
    // add to cart
    const addCart = (Product) => {}
    //remove item from cart
    const removeCart = (id) => {}

    // clear cart
    const clearCart =() => {}

    //inrement cart item quantity
    const incr = (id) => {}
     //decrement cart item quantity
    const decr = (id) => {}
  return (
    <CartContext.Provider value = {{ cartData,addCart,removeCart,clearCart,incr,decr}}>
        {
            props.children
        }
    </CartContext.Provider>
  )
}
export default CartProvider

