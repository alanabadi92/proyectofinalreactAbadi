import React, {createContext, useState} from 'react'

const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const addItem = (productToAdd, quantity) => {
        const newObj = {...productToAdd, quantity}

        if (estaEnCarrito(newObj.id)) {
            const carritoActualizado = cart.map((element) => {
                if (newObj.id === element.id) {
                    element.quantity += newObj.quantity
                }
                return element
            })

            setCart(carritoActualizado)
        }else{
            setCart([...cart, newObj])
        }

         
    }

    const estaEnCarrito = (key) => {
        return cart.some(element => element.id === key)
    }

    const getTotal = () => {
        let total = 0;
      
        cart.forEach((element) => {
          total += (element.precio * element.quantity);
        });
      
        return total;
    }

    const deleteItem = (id) => {
        const todosMenosUno = cart.filter((element) => element.id !== id)
        setCart([...todosMenosUno])
    }

    const clearCart = () => {
        setCart([]);
    }

    const productsQuantity = () => {
        let suma = 0;
        
        cart.forEach(element => {
            suma += element.quantity
        })

        return suma
    }

    return (
        <CartContext.Provider value={{cart, setCart, addItem, getTotal, deleteItem, clearCart, productsQuantity}}>{children}</CartContext.Provider>
    )
}

export default CartContext