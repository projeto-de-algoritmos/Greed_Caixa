import { Header, Body, SideBar } from './components';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [itemValue, setItemValue] = useState({
    iphone: 0,
    galaxy: 0,
    headset: 0,
    mouse: 0,
    teclado: 0,
    gpu: 0
  });

  return (
    <React.Fragment>
      {showSideBar ? <SideBar setShowSideBar={setShowSideBar} /> : <></> }
      <Header setShowSideBar={setShowSideBar}/>
      <Body setItemValue={setItemValue} itemValue={itemValue} />
    </React.Fragment>
    // <div>
    //   <input placeholder="Valor: R$ 00.00" type="text" id="add"/>
    //     <button type="button" id = "firstbt">Acrescenter valor</button>

    //     <div>
    //         <ul id="values"></ul>
    //     </div>
    //     <div id = "total">

    //     </div>
    //     <div id = "troco">
    //         <input type="text" placeholder="Pagamento: R$ 00.00" id = "payment"/>
    //         <button type="button">Pagar</button>
    //         <p id = "finalValue"></p>
    //     </div>
    //     <div id="contTabela">
    //         <table id="tabelaTroco">
    //             <thead>
    //                 <tr>
    //                     <th>Nota</th>
    //                     <th>Quantidade</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //             </tbody>
    //         </table>
    //     </div>
    // </div>
  );
}

export default App;
