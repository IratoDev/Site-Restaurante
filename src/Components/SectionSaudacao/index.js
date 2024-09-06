
import StyleSaudacao from "./StyleSaudacao.module.css";

export function SectionSaudacao({Title, Text, Imagem}){

return(

<>

<section id={StyleSaudacao.Saudacao} style={{background:`url(${Imagem}) no-repeat center/cover`}}>

    <div className={StyleSaudacao.ConteinerSaudacao}>

        <div className={StyleSaudacao.BoxSaudacao}>

            <h1>{Title}</h1>
            <h3>{Text}</h3>

        </div>

    </div>

</section>

</>

)

}