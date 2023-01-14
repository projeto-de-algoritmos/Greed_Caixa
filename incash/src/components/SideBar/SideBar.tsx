import { IItemValue } from '../../modal/itemValue'
import TableHeader from '../Table/Header/TableHeader';
import TableRow from '../Table/Row/TableRow';
import './style.css'
import CurrencyInput from 'react-currency-input-field';
import React, { useState } from 'react';

interface ISideBar {
    setShowSideBar: (boolean: boolean)=> void;
    itemValue: IItemValue;
}

const SideBar = ({setShowSideBar, itemValue}: ISideBar) => {
    const [payedValue, setPayedValue] = useState(0);
    
    const totalValue = itemValue.iphone + itemValue.galaxy + itemValue.headset + itemValue.mouse + itemValue.teclado + itemValue.gpu;

    const handlePayment = (event:React.SyntheticEvent) => {
        event.preventDefault();
        console.log(payedValue);
        console.log(totalValue);
    };

    return (
        <div className="side-bar">
            <button className='button-sid-bar' onClick={() => setShowSideBar(false)}>
                <svg className='svg-hamburguer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </button>
            <span>Carinho de Compras</span>
            <div className='tabela-produtos'>
                <TableHeader column1='Produto' column2='Valor'/>
                {itemValue.iphone !== 0 ? <TableRow column1='iPhone 14' column2={String(itemValue.iphone)} /> : ''}
                {itemValue.galaxy !== 0 ? <TableRow column1='Galaxy S22 Ultra' column2={String(itemValue.galaxy)} /> : ''}
                {itemValue.headset !== 0 ? <TableRow column1='Headest' column2={String(itemValue.headset)} /> : ''}
                {itemValue.mouse !== 0 ? <TableRow column1='Mouse' column2={String(itemValue.mouse)} /> : ''}
                {itemValue.teclado !== 0 ? <TableRow column1='Teclado' column2={String(itemValue.teclado)} /> : ''}
                {itemValue.gpu !== 0 ? <TableRow column1='Placa de Vídeo' column2={String(itemValue.gpu)} /> : ''}
                <TableRow column1='Total' column2={String(itemValue.gpu)} />
            </div>
            <div className='pagamento'>
                <CurrencyInput
                    className='input-pagar-total'
                    id="input-example"
                    name="input-name"
                    placeholder="Pagamento: R$ 00.00"
                    decimalsLimit={2}
                    onValueChange={(value, name) => setPayedValue(Number(value))}
                />
                <button type='submit' onClick={handlePayment}>Pagar</button>
            </div>
            <span>Tabela de Troco</span>
            <div className='tabela-troco'>
                <TableHeader column1='Nota' column2='Quantidade'/>  
            </div>
        </div>
    )
}

export default SideBar;
 