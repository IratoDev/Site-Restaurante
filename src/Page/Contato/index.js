
import StyleContato from "./StyleContato.module.css";

import { SectionSaudacao } from "../../Components/SectionSaudacao";
import { NavBar } from "../../Components/Navbar";
import { Rodape } from "../../Components/SectionRodape";

import imgameFundo from "../../assets/imagem/contact-us.jpg";

export default function ContatoPage(){

return(

<>
<NavBar/>

<SectionSaudacao Title="Contato" Text="É fácil entrar em contato conosco" Imagem={imgameFundo} />

<section id={StyleContato.InfoContato}>

<div id={StyleContato.ConteinerInfo} >

    <div id={StyleContato.BoxInfo}>

        <div className={StyleContato.ElementInfo}>

            <span className={StyleContato.BoxImg}>
            <i class="bi bi-map-fill"></i>
            </span>
            <h3>40 Park Ave, Brooklyn,
            </h3>
            <p>New York, New York 1111</p>

        </div>

        <div className={StyleContato.ElementInfo}>

            <span className={StyleContato.BoxImg}>
            <i class="bi bi-map-fill"></i>
            </span>
            <h3>40 Park Ave, Brooklyn,
            </h3>
            <p>New York, New York 1111</p>

        </div>

        <div className={StyleContato.ElementInfo}>

            <span className={StyleContato.BoxImg}>
            <i class="bi bi-map-fill"></i>
            </span>
            <h3>40 Park Ave, Brooklyn,
            </h3>
            <p>New York, New York 1111</p>

        </div>

    </div>

</div>

</section>

<section id={StyleContato.Mensagem}>

<div id={StyleContato.ConteinerMensagem}>

    <div id={StyleContato.BoxMensagem}>

        <div className={StyleContato.SectionEmail}>

            <div className={StyleContato.BoxEmail}>

                <form>

                    <input type="text" name="Nome" placeholder="Nome"/>
                    <input type="text" name="E-mail" placeholder="E-mail"/>
                    <input type="text" name="Nome" placeholder="Nome"/>

                    <textarea name="sua-mensagem" placeholder="Sua mensagem"/>

                    <button>Enviar</button>

                </form>

            </div>

        </div>
        
        <div className={StyleContato.Endereco}>

            <div className={StyleContato.BoxEndereco}>

            <iframe loading="lazy" src="https://maps.google.com/maps?q=40%20Park%20Ave%2C%20Brooklyn%2C%20New%20York&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near" title="40 Park Ave, Brooklyn, Nova York" aria-label="40 Park Ave, Brooklyn, Nova York"></iframe>

            </div>

        </div>


    </div>

</div>

</section>

<Rodape/>
</>

)

}