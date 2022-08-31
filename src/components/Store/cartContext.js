import React, { createContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export const cartContext = createContext();

export function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    function addToCart (item, quantity) {    
        
        if (isInCart(item.id)) {  
            let index = cart.findIndex(el => el.id === item.id)
            let product = cart[index]
            product.quantity = product.quantity + quantity
            const newCart = [...cart]
            cart.splice (index, 1 , product)
            setCart([...newCart])
        }     
        else{
            let copyCart = [...cart];
            copyCart.push({...item, quantity: quantity});
            setCart(copyCart) ;            
        }
        
    } 

    function isInCart (id) {
        return (
            cart.some(itemInCart => itemInCart.id ===+ id)
        )
    } 

    const deleteCart = ()  => {
        setCart([])
    }

    const deleteProd = (id) => {
        const newCart = [...cart]
        let index = newCart.findIndex(el => el.id === id)
        newCart.splice(index, 1)
        setCart([...newCart])
    }

    function MySwal () {
        const MySwal = withReactContent(Swal)                     
            MySwal.fire({
            title: <strong>Muchas gracias por comprar con nosotros!</strong>,
            html: <i>Vuelve pronto</i>,
            icon: 'success'
            })}
   
    return (
        <cartContext.Provider value = {{cart, addToCart, deleteCart, deleteProd, MySwal}} >
            {children}
        </cartContext.Provider>
    )
}