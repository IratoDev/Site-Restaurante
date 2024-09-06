
import StyleRodape from "./StyleRodape.module.css";
import Logo from "../../assets/imagem/caverta-logo1.png"

export function Rodape(){

return(

<>

<footer>

<div className={StyleRodape.ConteinerRodape}>

    <div className={StyleRodape.BoxRodape}>

        <div className={StyleRodape.ElementoRodape}>

            <img src={Logo} alt="logo rodape"/>

            <p>Para uma experiência gastronômica verdadeiramente memorável, reserve uma mesa com antecedência o mais rápido possível. Venha e prove nossa comida e vinho extraordinários.</p>

        </div>

        <div className={StyleRodape.ElementoRodape}>

        <h3>ENDEREÇO</h3>

        <ul>
        <li>58 Ralph Ave<br/>
        Nova York, Nova York 1111</li>

        <li>Telefone: +1 800 000 111</li>

        <li>Email: contact@example.com</li>

        </ul>

        </div>

        <div className={StyleRodape.ElementoRodape}>

        <h3>HORÁRIO DE ATENDIMENTO</h3>

        <ul>
            <li>Segunda a Domingo</li>
            <li>Almoço: 12h – 14h</li>
            <li>Jantar: 18h – 22h</li>

            <li>Happy Hours: 16h00 – 18h00</li>

        </ul>

        </div>

    </div>

<p>Copyright © 2024 IratoDev.com Todos os direitos reservados.</p>

</div>

</footer>

</>

)

}