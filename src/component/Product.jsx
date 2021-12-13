import React from 'react'
 import Cardcom from './Cardcom'
import FooterCom from './FooterCom'
import NavbarCom from "./NavbarCom";
export default function Product() {
    return (
        <div> 
             <NavbarCom />
            <Cardcom title="baby bed cute" cost="35$"/>
            <Cardcom title="baby bed red " cost="55$"/>
            <Cardcom title=" baby nest babay " cost="30$"/>
            <Cardcom title="nest bed " cost="25$"/>
            <Cardcom title="gray nest bed " cost="38$"/>
            <Cardcom title="pinky " cost="75$"/>
            <Cardcom title="blue bed" cost="15$"/>
            <Cardcom title="baby bed " cost="60$"/>
            <Cardcom title="baby bed " cost="60$"/>
            <Cardcom title="baby bed " cost="60$"/>
            <FooterCom/>
          
        </div>
    )
}
