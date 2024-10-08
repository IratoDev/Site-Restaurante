
import { SectionSaudacao } from "../../Components/SectionSaudacao";
import { NavBar } from "../../Components/Navbar";
import { MenuMobile } from "../../Components/Navbar";
import { Rodape } from "../../Components/SectionRodape";

import { ModalCardapio } from "../../Components/ModalMenu";

import imgameFundo from "../../assets/imagem/menu-img.jpg";

export function CardapioPage(){

return(

<>

<NavBar/>
<MenuMobile/>

<SectionSaudacao Title="Nosso Cardápio" Text="Venha provar nossas delícias
" Imagem={imgameFundo} />

<ModalCardapio/>

<Rodape/>

</>

)

}