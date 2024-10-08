
import { useState, useEffect, useRef } from "react";
import StyleModal from "./StyleMenu.module.css";
import { ObservedElement,useMyContext } from "../../Mycontext/Context";


export function ModalCardapio(){

const [Focus, setFocus]=useState("Slide1");
const[CurrentItem, setCurrentItem] = useState(0);

const ConteinerSlide = useRef();

const btn1 = useRef();
const btn2 = useRef();
const btn3 = useRef();

useEffect(()=>{

if(CurrentItem > 3){

setCurrentItem(0)

}if(CurrentItem<0){
   
setCurrentItem(3)

}

if (ConteinerSlide.current) {
    // Acessa e manipula diretamente o elemento DOM
    ConteinerSlide.current.style.transform = `translate3d(${-CurrentItem * 100}%, 0, 0)`; 
}


},[CurrentItem])

const handleClick = (slide) => {
setFocus(slide); 
};

return(

<>

<section className={StyleModal.ModalBebidas}>

<ObservedElement id="element7">
<div className={StyleModal.ConteinerModal}>

<div className={StyleModal.ConteinerCardapio}>

    <div className={StyleModal.ConteinerTitle}>

        <div className={StyleModal.BoxTitle}>

        <h3>- Descobrir -</h3>
        <h1>Cardápio à la carte</h1>

        <p>Explore textura, cor e, claro, os sabores definitivos com nosso menu da estação. Todos os ingredientes são frescos e cuidadosamente selecionados por nossos chefs. Desfrute de uma experiência gastronômica extraordinária.</p>

        </div>

    </div>

    <div id={StyleModal.NavBarBebidas}>

        <div className={StyleModal.BoxNav}>
            <span useRef={btn1} onClick={() => { handleClick('Slide1'); setCurrentItem(0)}}
        className={Focus === 'Slide1' ? StyleModal.focused : ''}>Entradas</span>
            <span useRef={btn2} onClick={() => { handleClick('Slide2'); setCurrentItem(1) }}
        className={Focus === 'Slide2' ? StyleModal.focused : ''}>Prato Principal</span>
            <span useRef={btn3} onClick={() => { handleClick('Slide3'); setCurrentItem(2)}}
        className={Focus === 'Slide3' ? StyleModal.focused : ''}>Sopas</span>
        <span useRef={btn3} onClick={() => { handleClick('Slide4'); setCurrentItem(3)}}
        className={Focus === 'Slide4' ? StyleModal.focused : ''}>Sobremesa</span>
        </div>

    </div>

    <div className={StyleModal.ConteirProdutos}>

    <div id={StyleModal.conteinerSlides} ref={ConteinerSlide}>

        <div className={StyleModal.Slides}>

        <div className={StyleModal.ColunProduto}>

            <div className={StyleModal.BoxProduto}>
            <ItemCardapio  titulo="Rum e coca" texto="Rum temperado, cola e limão, Coca-Cola com cereja, Coca-Cola com gás, ItemCardapio energéticas, Fatia de limão" preco="$ 17,00" />

            <ItemCardapio  titulo="Chá" texto="Chá verde, Chá de flores, Chá oolong, Chá premium ou delicado, Chá árabe, Chá preto com leite, Chá de maçã, Chá de iogurte" preco="$ 12,00" />

            <ItemCardapio  titulo="Socó" texto="Álcool ou não álcool, açúcar, limão, água e chá ou especiarias, suco de fruta, açúcar ou xarope de milho" preco="$ 16,00" />
            </div>

        </div>

        <div className={StyleModal.ColunProduto}>

            <div className={StyleModal.BoxProduto}>
            <ItemCardapio titulo="Suco de frutas" texto="Maçã, Laranja, Tomate, Damasco, Groselha preta, Mirtilo, Pimenta, Cranberry, Berinjela" preco="$ 19,00" />

            <ItemCardapio titulo="Refrigerante" texto="ItemCardapio carbonatadas, Light, Mineral, Classic, Refrigerante de limão, Refrigerante de laranja, Refrigerante de xarope, Refrigerante de maçã" preco="$ 19,00" />

            <ItemCardapio titulo="Iogurte de frutas" texto="IEspinafre, couve, acelga, couve, aipo, salsa ou brócolis, banana, iogurte e mel" preco="$ 24,00" />
            </div>

        </div>

        </div>

        <div className={StyleModal.Slides}>

<div className={StyleModal.ColunProduto}>

    <div className={StyleModal.BoxProduto}>
    <ItemCardapio  titulo="Café de baunilha" texto="Triple sec, baunilha e suco de limão ou lima, geralmente servido com sal ou açúcar na borda do copo, perfeito para o verão" preco="$ 19,00" />

    <ItemCardapio  titulo="Mocha de framboesa" texto="Tradicionalmente, um mojito é um coquetel que consiste em cinco ingredientes: rum branco, açúcar, suco de limão, água com gás e hortelã." preco="$ 19,00" />

    <ItemCardapio titulo="Morango banana" texto="Feito com uísque, vermute doce e bitters – uísque canadense, bourbon, uísque misturado e uísque do Tennessee." preco="$ 24,00" />
    </div>


</div>

<div className={StyleModal.ColunProduto}>

    <div className={StyleModal.BoxProduto}>
    <ItemCardapio titulo="Proteína de chocolate" texto="Ou informalmente um cosmo, é um coquetel feito com vodca, triple sec, suco de cranberry e suco de limão espremido na hora ou adoçado." preco="$ 17,00" />

    <ItemCardapio titulo="Morango gladiador" texto="Coquetel doce feito com rum, creme de coco ou leite de coco e suco de abacaxi, geralmente servido misturado ou batido" preco="$ 32,00" />

    <ItemCardapio titulo="Chocolate vegano" texto="Chocolate, suco de tomate e combinações de outras especiarias e aromas, incluindo molho inglês" preco="$ 26,00" />
    </div>

</div>

        </div>

        <div className={StyleModal.Slides}>

        <div className={StyleModal.ColunProduto}>

            <div className={StyleModal.BoxProduto}>
            <ItemCardapio  titulo="Chocolate" texto="Riesling é uma variedade de uva aromática que apresenta aromas florais, quase perfumados, bem como elevada acidez" preco="$ 17,00" />

            <ItemCardapio  titulo="Cereja batida" texto="É vinificado em muitos estilos diferentes, desde os vinhos magros e intensamente minerais de Chablis, França, até os vinhos do Novo Mundo com sabores frutados." preco="$ 12,00" />

            <ItemCardapio titulo="Morango banana" texto="Vinho de cor predominantemente clara, com aromas de frutos vermelhos como cerejas, framboesas, morangos e maçã." preco="$ 26,00" />
            </div>

        </div>

        <div className={StyleModal.ColunProduto}>

            <div className={StyleModal.BoxProduto}>
            <ItemCardapio titulo="Chá de Oregon" texto="Complemento delicioso para os sabores frescos de frutos do mar, crustáceos e peixes brancos. Aumenta o efeito" preco="$ 19,00" />

            <ItemCardapio  titulo="Brisa tropical" texto="A variedade de uva de vinho tinto mais famosa. As características gerais são escuras, tânicas, vegetais" preco="$ 19,00" />

            <ItemCardapio titulo="Manteiga de amendoim" texto="Merlot tem níveis moderados de álcool com sabores frescos de frutas vermelhas (framboesas, morangos e potencialmente folhas" preco="$ 24,00" />
            </div>

        </div>

        </div>

        <div className={StyleModal.Slides}>

        <div className={StyleModal.ColunProduto}>


            <div className={StyleModal.BoxProduto}>
            <ItemCardapio  titulo="Chocolate" texto="Riesling é uma variedade de uva aromática que apresenta aromas florais, quase perfumados, bem como elevada acidez" preco="$ 17,00" />

            <ItemCardapio  titulo="Cereja batida" texto="É vinificado em muitos estilos diferentes, desde os vinhos magros e intensamente minerais de Chablis, França, até os vinhos do Novo Mundo com sabores frutados." preco="$ 12,00" />

            <ItemCardapio titulo="Morango banana" texto="Vinho de cor predominantemente clara, com aromas de frutos vermelhos como cerejas, framboesas, morangos e maçã." preco="$ 26,00" />
            </div>

        </div>

        <div className={StyleModal.ColunProduto}>


            <div className={StyleModal.BoxProduto}>
            <ItemCardapio titulo="Chá de Oregon" texto="Complemento delicioso para os sabores frescos de frutos do mar, crustáceos e peixes brancos. Aumenta o efeito" preco="$ 19,00" />

            <ItemCardapio  titulo="Brisa tropical" texto="A variedade de uva de vinho tinto mais famosa. As características gerais são escuras, tânicas, vegetais" preco="$ 19,00" />

            <ItemCardapio titulo="Manteiga de amendoim" texto="Merlot tem níveis moderados de álcool com sabores frescos de frutas vermelhas (framboesas, morangos e potencialmente folhas" preco="$ 24,00" />
            </div>

        </div>

        </div>

    </div>

    </div>

</div>

</div>
</ObservedElement>

</section>

</>

)

}

function ItemCardapio({titulo,texto,preco}){

return(

<div className={StyleModal.Produto}>

<div className={StyleModal.BoxText}> 
    
    <h4>{titulo}</h4> 
    <p>{texto}</p> 
    <span>{preco}</span> 
</div>

</div>

)

}