
import StyleReserva from "./StyleReserva.module.css"

import { SectionSaudacao } from "../../Components/SectionSaudacao";
import { NavBar } from "../../Components/Navbar";
import { Rodape } from "../../Components/SectionRodape";

import imgameFundo from "../../assets/imagem/home12-img1.jpg";

export default function ReservaPage(){

return(

<>
<NavBar/>

<SectionSaudacao Title="Nosso Cardápio" Text="Venha provar nossas delícias
" Imagem={imgameFundo} />

<section id={StyleReserva.Reservas}>

<div id={StyleReserva.ConteinerReservas}>

    <div id={StyleReserva.BoxReservas}>

    

        <div className={StyleReserva.SectionInfomation}>

        <div className={StyleReserva.BoxInfo}>

            <h2>Informações de contato</h2>

            <div className={StyleReserva.ElementInfo}>

            <div className={StyleReserva.BoxIcon}>
            <i class="bi bi-geo-alt-fill"></i>
            </div>

            <div className={StyleReserva.BoxText}>
                <p>Endereço</p>
                <p>40 Park Ave,</p>
                <p>Brooklyn, Nova York</p>
            </div>
            </div>

        </div>

        </div>

        <div className={StyleReserva.SectionForm}>

                <div className={StyleReserva.BoxForm}>

                    <form>

                        <label>
                        <legend>Nome*</legend>
                        <input type="text" name="Nome"/>
                        </label>

                        <label>
                        <legend>Email*</legend>
                        <input type="text" name="Email"/>
                        </label>

                        <label>
                        <legend>Telefone*</legend>
                        <input type="text" name="telefone"/>
                        </label>
                        
                        <label>
                        <legend>Data*</legend>
                        <input type="date" name="Data"/>
                        </label>

                        <label>
                        <legend>Horarios*</legend>
                        <select>
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                            <option>d</option>
                        </select>
                        </label>

                        <label>
                        <legend>Assentos*</legend>
                        <select>
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                            <option>d</option>
                        </select>
                        </label>

                        <label>
                        <legend>Pedido especiais</legend>
                        <textarea cols="40" rows="4" maxlength="2000"/>
                        </label>

                        <button>Reserve agora</button>

                    </form>

                </div>

        </div>

        

    </div>

</div>

</section>

<Rodape/>
</>

)

}