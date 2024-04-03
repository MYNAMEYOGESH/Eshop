
import { useContext } from 'react'
import { CartContext } from '../context/CartContext' 


// useCart => custom hook represents the cartContext
const useCart = () => {
    return useContext(CartContext)
}

export default useCart
