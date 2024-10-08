
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../../Mycontext/Context";

import StyleNavBar from "./StyleNavbar.module.css";

import Logo from "../../assets/imagem/caverta-logo1.png"



export function NavBar(){

const { ButtonMenu, setButtonMenu } = useMyContext();
const [Nav,setNav] = useState(false);
const [Scroll, setScroll] = useState(0);
const [Width, setWidth] = useState(window.innerWidth);

const handleButtonClick = () => {
setButtonMenu(!ButtonMenu);
};

useEffect(()=>{

if(Scroll > 100){
setNav(true)

}else{

setNav(false)

}

const handleScroll = () => {
setScroll(window.scrollY);
};

const handleWidth = () => {
setWidth(window.innerWidth);
};

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleWidth);


return () => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleWidth);
};

},[Scroll, Nav, Width,ButtonMenu])


const Navegacao =()=>{

if(Width >= 760){

return <div className={StyleNavBar.ConteinerNavBar}>

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

}else{

return <div className={StyleNavBar.ConteinerMobile}>

<div className={StyleNavBar.ConteinerLogo}>
    
    <div className={StyleNavBar.BoxLogo}>
        <img src={Logo} alt="Logo"/>
    </div>

</div>

<nav className={StyleNavBar.ConteinerNav}>

    <div className={StyleNavBar.BoxNav}>

        <button style={{color:(Nav ? "#000": "#fff")}} onClick={handleButtonClick}>
            {ButtonMenu ? <i class="bi bi-x-lg"></i> : <i class="bi bi-list"></i>}
        </button>

    </div>

</nav>

</div>

}


}



return(

<>

<head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>

</head>

<header style={{backgroundColor:(Nav ? "#252525" : "transparent")}}>

<Navegacao/>

</header>


</>

)

}

export function MenuMobile(){

const { ButtonMenu, setButtonMenu } = useMyContext();
const [WidthMenu, setWidthMenu] = useState(window.innerWidth);



function TransicaoNav(){

(setButtonMenu(false));
 window.scrollTo(0, 0);

}
    

useEffect(()=>{
  
const handleWidthMenu = () => {
setWidthMenu(window.innerWidth);
};

window.addEventListener('resize', handleWidthMenu);

return () => {
  window.removeEventListener('resize', handleWidthMenu);
};

},[ WidthMenu,ButtonMenu])

const Menu = ()=>{

if(ButtonMenu && WidthMenu < 751){

return <div id={StyleNavBar.MenuMobile}>

<div id={StyleNavBar.conteinerMenuMobile}>

<div className={StyleNavBar.BoxButton}>

    <button> <i class="bi bi-x-lg"></i> </button>

</div>

<nav className={StyleNavBar.ConteinerButton}>
<Link className={StyleNavBar.ButtonNavBar} onClick={TransicaoNav} to='/'>HOME</Link>
<Link className={StyleNavBar.ButtonNavBar} onClick={TransicaoNav} to='/Sobre'>SOBRE</Link>
<Link className={StyleNavBar.ButtonNavBar} onClick={TransicaoNav} to='/Cardapio'>CARDAPIO</Link>
<Link className={StyleNavBar.ButtonNavBar} onClick={TransicaoNav} to='/Contato'>CONTATO</Link>
<Link className={StyleNavBar.ButtonNavBar} onClick={TransicaoNav} to='/Reservas'>Reservas</Link>
</nav>

<div id={StyleNavBar.BoxIcon}>

<i class="bi bi-facebook"></i>
<i class="bi bi-instagram"></i>
<i class="bi bi-whatsapp"></i>

</div>

</div>

</div>


}else{

return ""

}

}

return(

<>

<head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>

</head>

<Menu/>

</>

)

}