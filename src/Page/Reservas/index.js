
import StyleReserva from "./StyleReserva.module.css"

import { SectionSaudacao } from "../../Components/SectionSaudacao";
import { NavBar } from "../../Components/Navbar";
import { MenuMobile } from "../../Components/Navbar";
import { Rodape } from "../../Components/SectionRodape";
import { ObservedElement, useMyContext } from "../../Mycontext/Context";

import imgameFundo from "../../assets/imagem/home12-img1.jpg";

export default function ReservaPage(){

return(

<>

<head>

<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.3/font/bootstrap-icons.min.css" rel="stylesheet"/>

</head>

<NavBar/>
<MenuMobile/>

<SectionSaudacao Title="Nosso Cardápio" Text="Venha provar nossas delícias
" Imagem={imgameFundo} />

<section id={StyleReserva.Reservas}>

<div id={StyleReserva.ConteinerReservas}>

    <div id={StyleReserva.BoxReservas}>

    
    <ObservedElement id="element17">
        <div className={StyleReserva.SectionInfomation}>

        <div className={StyleReserva.BoxInfo}>

            <div className={StyleReserva.BoxTitle}>
            <h2>Informações de contato</h2>
            </div>

            <div className={StyleReserva.ElementInfo}>

            <span className={StyleReserva.BoxIcon}>
            <i class="bi bi-geo-alt-fill"></i> 
            </span>

            <div className={StyleReserva.BoxText}>
                <p>Endereço</p>
                <p>40 Park Ave,</p>
                <p>Brooklyn, Nova York</p>
            </div>
            </div>

            <div className={StyleReserva.ElementInfo}>

            <span className={StyleReserva.BoxIcon}>
            <i class="bi bi-telephone-fill"></i>
            </span>

            <div className={StyleReserva.BoxText}>
                <p>TELEFONE</p>
                <p>+1 800 000 111</p>
            </div>
            </div>

            <div className={StyleReserva.ElementInfo}>

            <span className={StyleReserva.BoxIcon}>
            <i class="bi bi-envelope"></i> 
            </span>

            <div className={StyleReserva.BoxText}>
                <p>E-MAIL</p>
                <p>contato@exemplo.com</p>
            </div>
            </div>

            <div className={StyleReserva.ElementInfo}>

            <span className={StyleReserva.BoxIcon}>
            <i class="bi bi-clock"></i> 
            </span>

            <div className={StyleReserva.BoxText}>
                <p>HORÁRIO DE <br/>FUNCIONAMENTO</p>
                <p>Segunda a quinta:<br/> 10h - 23h</p>
                <p>Sexta a domingo:<br/> 12h - tarde</p>
            </div>
            </div>

        </div>

        </div>
    </ObservedElement>

    <ObservedElement id="element18">
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
                            <option>09:00</option>
                            <option>10:00</option>
                            <option>11:00</option>
                            <option>12:00</option>
                            <option>13:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                            <option>16:00</option>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                        </label>

                        <label>
                        <legend>Assentos*</legend>
                        <select>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
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
    </ObservedElement>
        

    </div>

</div>

</section>

<Rodape/>
</>

)

}