import React, { useContext } from 'react'
import './CartWidget.css'
import CartIcon from '/img/cart.png'
import CartContext from '../../context/CartContext'

const CartWidget = () => {
  const {cart, productsQuantity} = useContext(CartContext)

  if (cart.length>0) {
    return (
      <div>
          <img className="iconoCarrito" src={CartIcon} alt="carrito"/><span>{productsQuantity()}</span>
      </div>
    )
  }else{
    return (
      <div>
          <img className="iconoCarrito" src={CartIcon} alt="carrito"/>
      </div>
    )
  }
  
}

export default CartWidget