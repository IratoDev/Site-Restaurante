
import StyleContato from "./StyleContato.module.css";

import { SectionSaudacao } from "../../Components/SectionSaudacao";
import { NavBar } from "../../Components/Navbar";
import { MenuMobile } from "../../Components/Navbar";
import { Rodape } from "../../Components/SectionRodape";
import { ObservedElement, useMyContext } from "../../Mycontext/Context";

import imgameFundo from "../../assets/imagem/contact-us.jpg";

export default function ContatoPage(){

return(

<>

<head>

<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.3/font/bootstrap-icons.min.css" rel="stylesheet"/>

</head>

<NavBar/>

<MenuMobile/>

<SectionSaudacao Title="Contato" Text="É fácil entrar em contato conosco" Imagem={imgameFundo} />

<section id={StyleContato.InfoContato}>

<ObservedElement id="element15">
<div id={StyleContato.ConteinerInfo} >

    <div id={StyleContato.BoxInfo}>

        <div className={StyleContato.ElementInfo}>

            <span className={StyleContato.BoxIcon}>
            <i class="bi bi-map-fill"></i>
            </span>

            <div className={StyleContato.BoxText}>
            <h3>Localização</h3>
            <p>40 Park Ave, Brooklyn,</p>
            <p>New York, New York 1111</p>
            </div>

        </div>

        <div className={StyleContato.ElementInfo}>

            <span className={StyleContato.BoxIcon}>
            <i class="bi bi-telephone-fill"></i>
            </span>

            <div className={StyleContato.BoxText}>
            <h3>Contato</h3>
            <p>N+1 800 000 111</p>
            <p>contact@example.com</p>
            </div>

        </div>

        <div className={StyleContato.ElementInfo}>

            <span className={StyleContato.BoxIcon}>
            <i class="bi bi-bell-fill"></i>
            </span>

            <div className={StyleContato.BoxText}>
            <h3>Horário de funcionamento</h3>
            <p>Almoço: 12h – 14h</p>
            <p>Jantar: 18h – 22h</p>
            </div>

        </div>

    </div>

</div>
</ObservedElement>

</section>

<section id={StyleContato.Mensagem}>

<ObservedElement id="element16">
<div id={StyleContato.ConteinerMensagem}>

    <div id={StyleContato.BoxMensagem}>

        <div className={StyleContato.SectionEmail}>

            <div className={StyleContato.BoxEmail}>

                <form>

                    <input type="text" name="Nome" placeholder="Nome"/>
                    <input type="text" name="E-mail" placeholder="E-mail"/>
                    <input type="text" name="Nome" placeholder="Nome"/>

                    <textarea cols="40" rows="4" maxlength="2000" name="sua-mensagem" placeholder="Sua mensagem"/>

                    <button>Enviar</button>

                </form>

            </div>

        </div>
        
        <div className={StyleContato.SectionEndereco}>

            <div className={StyleContato.BoxEndereco}>

            <iframe loading="lazy" src="https://maps.google.com/maps?q=40%20Park%20Ave%2C%20Brooklyn%2C%20New%20York&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near" title="40 Park Ave, Brooklyn, Nova York" aria-label="40 Park Ave, Brooklyn, Nova York"></iframe>

            </div>

        </div>


    </div>

</div>
</ObservedElement>

</section>

<Rodape/>
</>

)

}