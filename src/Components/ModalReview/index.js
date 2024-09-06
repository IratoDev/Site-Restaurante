
import { useState, useEffect, useRef } from "react";
import StyleReview from "./StyleReview.module.css"

export function ModalReview(){

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

function BtnLeft(){

setCurrentItem(CurrentItem-1);

}

function BtnRight(){

setCurrentItem(CurrentItem+1);

}

return(

<>

<div className={StyleReview.ConteinerReview}>

    <div id={StyleReview.ConteinerText}>

        <div className={StyleReview.boxText}>

            <h3>- Testemunhos -</h3>
            <h1>O que nossos clientes dizem</h1>

        </div>

    </div>

    <div id={StyleReview.conteinerCarrosel} ref={ConteinerSlide}>

        <div className={StyleReview.Slides}>
            
            <div className={StyleReview.BoxText}>
            "Caverta é um lugar especial tiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc vitae. Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
            </div>
            
        </div>

        <div className={StyleReview.Slides}>
            
            <div className={StyleReview.BoxText}>
            "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, Tellus eget condimentum rhoncus, sem quam sempre libero. officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae."
            </div>
        
        </div>
        
        <div className={StyleReview.Slides}>
            
            <div className={StyleReview.BoxText}>
            "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum sempre nisi. Aenean vulputate eleifend Tellus. Aenean leo ligula, porttitor eu, consequat. Duis Leo. Sed fringilla mauris sente-se amet nibh.
            </div>        

        </div>

        <div className={StyleReview.Slides}>
            
            <div className={StyleReview.BoxText}>
            "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Itaque earum rerum hic tenetur a sapiente delectus.
            </div>

        </div>

    </div>

<button className={StyleReview.BtnCarrosel} onClick={BtnLeft} style={{left:"0"}}>
<i class="bi bi-chevron-compact-left"></i>
</button>

<button className={StyleReview.BtnCarrosel} onClick={BtnRight} style={{right:"0"}}>
<i class="bi bi-chevron-compact-right"></i>
</button>

</div>

</>

)

}