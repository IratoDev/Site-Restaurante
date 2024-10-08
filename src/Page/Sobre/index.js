
import StyleSobre from "./StyleSobre.module.css"

import { SectionSaudacao } from "../../Components/SectionSaudacao";
import { NavBar } from "../../Components/Navbar";
import { MenuMobile } from "../../Components/Navbar";
import { Rodape } from "../../Components/SectionRodape";
import { ObservedElement, useMyContext } from "../../Mycontext/Context";

import imgameFundo from "../../assets/imagem/blog-img.jpg";
import img1 from "../../assets/imagem/home7.jpg";
import img2 from "../../assets/imagem/home-5.jpg";

import Team1 from "../../assets/imagem/chef-1.jpg";
import Team2 from "../../assets/imagem/team-2.jpg";
import Team3 from "../../assets/imagem/team-3.jpg";
import Team4 from "../../assets/imagem/team-4.jpg";

import imgSobre from "../../assets/imagem/parallax-2.jpg"



export default function SobrePage(){

return(

<>
<NavBar/>
<MenuMobile/>

<ObservedElement id="element8">
<SectionSaudacao Title="Sobre mim
" Text="Profissionais Experientes" Imagem={imgameFundo} />
</ObservedElement>

<section id={StyleSobre.Service}>

<ObservedElement id="element9">
<div id={StyleSobre.ConteinerService}>

    <div id={StyleSobre.BoxService}>

        <div className={StyleSobre.ElementService}>

        <div className={StyleSobre.BoxIcon}>
        <svg aria-hidden="true" class="e-font-icon-svg e-far-star" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
        </div>

        <div className={StyleSobre.BoxText}>
        <h3>Chefs famosos</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>

        </div>

        <div className={StyleSobre.ElementService}>

        <div className={StyleSobre.BoxIcon}>
        <svg aria-hidden="true" class="e-font-icon-svg e-fas-seedling" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"></path></svg>
        </div>

        <div className={StyleSobre.BoxText}>
        <h3>Sabores Exóticos</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>

        </div>

        <div className={StyleSobre.ElementService}>

        <div className={StyleSobre.BoxIcon}>
        <svg aria-hidden="true" class="e-font-icon-svg e-far-lemon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M484.112 27.889C455.989-.233 416.108-8.057 387.059 8.865 347.604 31.848 223.504-41.111 91.196 91.197-41.277 223.672 31.923 347.472 8.866 387.058c-16.922 29.051-9.1 68.932 19.022 97.054 28.135 28.135 68.011 35.938 97.057 19.021 39.423-22.97 163.557 49.969 295.858-82.329 132.474-132.477 59.273-256.277 82.331-295.861 16.922-29.05 9.1-68.931-19.022-97.054zm-22.405 72.894c-38.8 66.609 45.6 165.635-74.845 286.08-120.44 120.443-219.475 36.048-286.076 74.843-22.679 13.207-64.035-27.241-50.493-50.488 38.8-66.609-45.6-165.635 74.845-286.08C245.573 4.702 344.616 89.086 411.219 50.292c22.73-13.24 64.005 27.288 50.488 50.491zm-169.861 8.736c1.37 10.96-6.404 20.957-17.365 22.327-54.846 6.855-135.779 87.787-142.635 142.635-1.373 10.989-11.399 18.734-22.326 17.365-10.961-1.37-18.735-11.366-17.365-22.326 9.162-73.286 104.167-168.215 177.365-177.365 10.953-1.368 20.956 6.403 22.326 17.364z"></path></svg>
        </div>

        <div className={StyleSobre.BoxText}>
        <h3>Sucos de vegetais</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>

        </div>

    </div>

</div>
</ObservedElement>

</section>

<section id={StyleSobre.TextSobre}>

<ObservedElement id="element10">
<div id={StyleSobre.ConteinerTextSobre}>

    <div id={StyleSobre.BoxTextSobre}>

        <div className={StyleSobre.BoxText}>

            <h3>- Conceitos -</h3>
            <h1>Visão Culinária</h1>
            <p>Para uma experiência gastronômica verdadeiramente memorável, a culinária e a atmosfera são combinadas tão cuidadosamente quanto a comida e o vinho. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

        </div>

    </div>

</div>
</ObservedElement>

</section>

<section id={StyleSobre.SectionImg}>

<ObservedElement id="element11">
<div id={StyleSobre.ConteinerSectionImg}>

    <div id={StyleSobre.BoxSectionImg}>

        <div className={StyleSobre.BoxImg}>
        <img src={img1} alt="img1"/>
        </div>

        <div className={StyleSobre.BoxImg}>
        <img src={img2} alt="img2"/>
        </div>

    </div>

</div>
</ObservedElement>

</section>

<section id={StyleSobre.Info}>

<ObservedElement id="element12">
<div id={StyleSobre.ConteinerInfo}>

    <div id={StyleSobre.BoxInfo}>

        <div className={StyleSobre.SectionTitle}>

            <div className={StyleSobre.BoxText}>

            <h3>- Equipe -</h3>
            <h1>Grandes Chefs</h1>

            </div>

        </div>
        
        <div className={StyleSobre.SectionText}>

            <div className={StyleSobre.BoxText}>
                <p>
                Aqueles que não o trataram antes do julgamento, aqueles que não o trataram, o abandonaram, mas ele foi atormentado pela filosofia. Depois ele escolheu para ele a causa da força, essas fedras inusitadas para que, essas coisas a gente trabalhe em latim. E com o ensinamento e a conclusão, isso o lisonjeia ao mais alto grau. 
                </p>

                <p>
                Ou foi preso por busca, quando sentiu as censuras. O cliente é muito importante, o cliente será seguido pelo cliente. Como desenvolvedor de terras, chore.
                </p>
            </div>

        </div>

    </div>

</div>
</ObservedElement>

</section>

<section id={StyleSobre.Team}>

<ObservedElement id="element13">
<div id={StyleSobre.ConteinerTeam}>

    <div id={StyleSobre.BoxTeam}>

        <div className={StyleSobre.ElementTeam}>

            <div className={StyleSobre.BoxImg}>
                <img src={Team1} alt="team1"/>
            </div>

            <div className={StyleSobre.BoxText}>
            <h2>Ana Smith</h2>
            <h3>- Chefe -</h3>

            <p>Vou abrir tudo. E com justo ódio lideramos aqueles que são abrandados pela lisonja dos prazeres presentes e Nem há ninguém que persiga a própria dor porque ela é dor.
            </p>
            </div>

        </div>

        <div className={StyleSobre.ElementTeam}>

            <div className={StyleSobre.BoxImg}>
                <img src={Team2} alt="team2"/>
            </div>

            <div className={StyleSobre.BoxText}>
            <h2>Michel Carter</h2>
            <h3>- Gerente -</h3>

            <p>Vou abrir tudo. E com justo ódio lideramos aqueles que são abrandados pela lisonja dos prazeres presentes e Nem há ninguém que persiga a própria dor porque ela é dor.
            </p>
            </div>

        </div>

        <div className={StyleSobre.ElementTeam}>

            <div className={StyleSobre.BoxImg}>
                <img src={Team3} alt="team3"/>
            </div>

            <div className={StyleSobre.BoxText}>
            <h2>Sara Burton</h2>
            <h3>- Financiar -</h3>

            <p>Vou abrir tudo. E com justo ódio lideramos aqueles que são abrandados pela lisonja dos prazeres presentes e Nem há ninguém que persiga a própria dor porque ela é dor.
            </p>
            </div>

        </div>

        <div className={StyleSobre.ElementTeam}>

            <div className={StyleSobre.BoxImg}>
                <img src={Team4} alt="team4"/>
            </div>

            <div className={StyleSobre.BoxText}>
            <h2>Tyler Hart</h2>
            <h3>- Marketing -</h3>

            <p>Vou abrir tudo. E com justo ódio lideramos aqueles que são abrandados pela lisonja dos prazeres presentes e Nem há ninguém que persiga a própria dor porque ela é dor.
            </p>
            </div>

        </div>

    </div>

</div>
</ObservedElement>

</section>

<section id={StyleSobre.Sobre}>

<ObservedElement id="element14">
<div id={StyleSobre.ConteinerSobre}>

    <div id={StyleSobre.BoxSobre}>

        <div className={StyleSobre.SectionImg}>

            <div className={StyleSobre.BoxImg}>

            <img src={imgSobre} alt="Img3"/>

            </div>

        </div>

        <div className={StyleSobre.SectionText}>

            <div className={StyleSobre.BoxText}>

                <h3>- Aberto diariamente -</h3>
                <h1>Venha conhecer o nosso restaurante</h1>

                <p>Para uma experiência gastronômica verdadeiramente memorável, a culinária e a atmosfera são combinadas tão cuidadosamente quanto a comida e o vinho. Na verdade, falando nos mínimos detalhes, ninguém deveria se exercitar de forma alguma. Porque quem não sabe seguir o prazer com a razão sofrerá grandes dores. Mente, essa é a fuga de trabalhos e dores. Para tempo livre.</p>

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