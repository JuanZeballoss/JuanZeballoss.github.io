import React, { useState } from "react";

function ItemCount ({initial, stock}) {

    const [clicks, setClicks] = useState(1)

    const sumar = () => {         
        clicks === stock ? alert("No puedes agregar mas productos") : setClicks(clicks+1);} 
    
    const restar = () => {        
        clicks === initial ? alert("No puedes seleccionar menos de 1") : setClicks(clicks-1);
        }    

    return (
        <>
            <div className="addToCart">        
            <button  className="symbolMenos" onClick= {restar} >-</button>
            <button  className="symbolMas" onClick= {sumar} >+</button>
            <h3>Cantidad: {clicks}</h3>
            </div>
        </>
    )
    }
export default ItemCount;