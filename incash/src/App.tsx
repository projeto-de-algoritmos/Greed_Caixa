import React from 'react';
import './App.css';
import { Header, Card } from './components';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
