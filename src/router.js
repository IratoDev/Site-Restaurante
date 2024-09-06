
import { BrowserRouter,Routes,Route } from "react-router-dom";

import HomePage from "./Page/Home";

import { CardapioPage } from "./Page/Cardapio";
import SobrePage from "./Page/Sobre";
import ReservaPage from "./Page/Reservas";
import ContatoPage from "./Page/Contato";

export default function RouterApp(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<HomePage/>}/>
<Route path="/Cardapio" element={<CardapioPage/>}/>
<Route path="/Sobre" element={<SobrePage/>}/>
<Route path="/Reservas" element={<ReservaPage/>}/>
<Route path="/Contato" element={<ContatoPage/>}/>

</Routes>

</BrowserRouter>

)

}