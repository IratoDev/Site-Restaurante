
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import StyleNavBar from "./StyleNavbar.module.css";

import Logo from "../../assets/imagem/caverta-logo1.png"

export function NavBar(){

const [Nav,setNav] = useState(false);
const [Scroll, setScroll] = useState(0);


useEffect(()=>{

if(Scroll > 200){
setNav(true)

}else{

setNav(false)

}

const handleScroll = () => {
    setScroll(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);

console.log(Nav)
console.log(Scroll)

},[Scroll, Nav])

return(

<>

<header style={{backgroundColor:(Nav ? "#252525" : "transparent")}}>

<div className={StyleNavBar.ConteinerNavBar}>

<div className={StyleNavBar.ConteinerLogo}>
    
    <div className={StyleNavBar.BoxLogo}>
        <img src={Logo} alt="Logo"/>
    </div>

</div>

<nav className={StyleNavBar.ConteinerNav}>

    <div className={StyleNavBar.BoxNav}>

        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Cardapio"}>Cardapio</Link></li>
            <li><Link to={"/Sobre"}>Sobre</Link></li>
            <li><Link to={"/Contato"}>Contato</Link></li>
            <li><Link to={"/Reservas"}>Reservas</Link></li>

        </ul>

    </div>

</nav>

</div>

</header>

</>

)

}