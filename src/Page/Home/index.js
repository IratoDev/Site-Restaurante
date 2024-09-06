
import { useEffect, useState, useRef } from "react";
import StyleHomePage from "./StyleHome.module.css";

import imgSaudacao1 from "../../assets/imagem//welcome-1.jpg";
import imgSaudacao2 from "../../assets/imagem/welcome-2.jpg";

import imgEquipe1 from "../../assets/imagem/home-team-1.jpg";
import imgEquipe2 from "../../assets/imagem/home-team-2.jpg";

import { NavBar } from "../../Components/Navbar";
import { Rodape } from "../../Components/SectionRodape";
import { ModalCardapio } from "../../Components/ModalMenu";
import { ModalReview } from "../../Components/ModalReview";

export default function HomePage(){

const[CurrentItem, setCurrentItem] = useState(0);
const ConteinerSlide = useRef();

useEffect(()=>{

if(CurrentItem > 2){

setCurrentItem(0)

}if(CurrentItem<0){
   
setCurrentItem(2)

}

if (ConteinerSlide.current) {
    // Acessa e manipula diretamente o elemento DOM
    ConteinerSlide.current.style.transform = `translate3d(${-CurrentItem * 100}%, 0, 0)`;
    ConteinerSlide.current.style.transition= "transform 1.5s ease-in-out";
    ConteinerSlide.current.style.opacity= "1";

}


},[CurrentItem])


useEffect(() => {
    const interval = setInterval(() => {
        setCurrentItem((prevItem) => (prevItem + 1) % 3);
        ConteinerSlide.current.style.opacity= "0";
    }, 5000);

    // Limpar o intervalo ao desmontar o componente
    return () => clearInterval(interval);
}, []);

function BtnLeft(){

setCurrentItem(CurrentItem-1);

}

function BtnRight(){

    setCurrentItem(CurrentItem+1);

}

return(

<>

<head>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
    
</head>

<NavBar/>

<main>

<section id={StyleHomePage.Home}> 

<div className={StyleHomePage.ConteinerHome}>

    <div id={StyleHomePage.ConteinerText}>

        <div className={StyleHomePage.boxText}>

            <h4>HAPPY HOURS AT</h4>
            <h1>Caverta</h1>
            <p>We offer a highly seasonal and continuously evolving tasting menu experience.</p>
            <button>Contact Us</button>

        </div>

    </div>

    <div id={StyleHomePage.conteinerCarrosel} ref={ConteinerSlide}>

        <div className={StyleHomePage.Slides}>Slide1</div>
        <div className={StyleHomePage.Slides}>Slide2</div>
        <div className={StyleHomePage.Slides}>Slide3</div>

    </div>

<button className={StyleHomePage.BtnCarrosel} onClick={BtnLeft} style={{left:"0"}}>
<i class="bi bi-chevron-compact-left"></i>
</button>

<button className={StyleHomePage.BtnCarrosel} onClick={BtnRight} style={{right:"0"}}>
<i class="bi bi-chevron-compact-right"></i>
</button>

</div>

</section>

<section id={StyleHomePage.Saudacao}>

<div id={StyleHomePage.ConteinerSaudacao}>

    <div className={StyleHomePage.BoxSaudacao}>

        <img src={imgSaudacao1} alt="img-Saudacao-1"/>

        <div className={StyleHomePage.ConteinerTexSaudacao}>

            <div className={StyleHomePage.BoxText}>

            <h3>- Welcome -</h3>

            <h2>Dining at Caverta</h2>

            <p>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>


            </div>

        </div>


        <img src={imgSaudacao2} alt="img-Saudacao-1"/>

    </div>

</div>

</section>

<section className={StyleHomePage.Banner}>

<div className={StyleHomePage.conteinerBanner}>

    <div className={StyleHomePage.BoxBanner}>

    <h3>- Venha e veja -</h3>
    <h1>Nós criamos experiências deliciosas</h1>

    </div>

</div>

</section>

<ModalCardapio/>

<section className={StyleHomePage.Banner}>

<div className={StyleHomePage.conteinerBanner}>

    <div className={StyleHomePage.BoxBanner}>

    <h3>- Reservas agora -</h3>
    <h1>Jantares Privados e Happy Hours</h1>

    </div>

</div>

</section>

<section id={StyleHomePage.Equipe}>

<div id={StyleHomePage.ConteinerEquipe}>

    <div className={StyleHomePage.BoxEquipe}>

        <div className={StyleHomePage.SecessaoEquipeText}>

            <div className={StyleHomePage.BoxText}>

                <h3>- Nos bastidores -</h3>
                <h1>A equipe</h1>
                <p>Para uma experiência gastronômica verdadeiramente memorável, a culinária e a atmosfera são combinadas tão cuidadosamente quanto a comida e o vinho. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga.</p>

            </div>

        </div>

        <div className={StyleHomePage.SecessaoEquipeImg}>

            <div className={StyleHomePage.ConteinerImg}>

                <img src={imgEquipe1} alt="img-Equipe-1"/>
                <img src={imgEquipe2} alt="img-Equipe-2"/>

            </div>

        </div>

    </div>

</div>

</section>

<ModalReview/>

<section id={StyleHomePage.Reservas}>

<div id={StyleHomePage.ConteinerReservas}>

    <div id={StyleHomePage.BoxReservas}>

        <div className={StyleHomePage.SectionTitle}>

            <div className={StyleHomePage.BoxText}>

            <h3>- Contato -</h3>
            <h1>Faça uma reserva</h1>

            </div>

        </div>

        <div className={StyleHomePage.SectionText}>

            <div className={StyleHomePage.BoxText}>

            <h4>Jantar Privado</h4>

            <p>O Main Dining Room pode acomodar até 18 convidados e requer uma reserva de meia noite ou noite inteira. As reservas estão disponíveis online 6 semanas antes da data da reserva.</p>

            </div>

            <div className={StyleHomePage.BoxText}>

            <h4>Eventos Privados</h4>

            <p>Procurando um local ideal? Não procure mais. Jantares corporativos, ocasiões especiais, Chef's Table, deixe-nos cuidar de suas necessidades. As reservas estão disponíveis on-line 6 semanas antes da data da reserva.</p>

            </div>


        </div>
        
        <div className={StyleHomePage.SectionFormulario}>

            <div className={StyleHomePage.ConteinerForm}>

                <form>

                <input placeholder="Nome" type="text" name="Name" />
                <input placeholder="E-mail" type="text" name="Email" />
                <input placeholder="Telefone" type="text" name="Telefone" />

                <textarea cols="40" rows="5" maxlength="2000" placeholder="Sua mensagem" name="sua-mensagem"/>

                <button type="submit">Reserve agora</button>

                </form>

            </div>

        </div>

    </div>

</div>

</section>

</main>

<Rodape/>

</>

)

}