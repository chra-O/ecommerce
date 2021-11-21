import React from 'react'
import NavbarCom from "./NavbarCom";
import { useSelector } from "react-redux";
export default function InBasket() {
    const showName = useSelector((state) => state.baskit.value);
    return (
        
        <div>
             <NavbarCom />
             {showName.map((card , index )=>{
                          return  <div> {card.name} </div>
                    
             })}
             
        </div>
    )
}
