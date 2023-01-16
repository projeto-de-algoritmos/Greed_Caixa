import CurrencyInput from 'react-currency-input-field';
import TableHeader from '../Table/Header/TableHeader';
import { IItemValue } from '../../modal/itemValue'
import TableRow from '../Table/Row/TableRow';
import Greedy from '../../utils/greedy.js';
import React, { useState } from 'react';
import './style.css'

interface ISideBar {
    setShowSideBar: (boolean: boolean)=> void;
    itemValue: IItemValue;
}

interface INotasValor {
    nota: number;
    qtd: number;
}

const SideBar = ({setShowSideBar, itemValue}: ISideBar) => {
    const [payedValue, setPayedValue] = useState(0);
    const [troco, setTroco] = useState('');
    const [notasValor, setNotasValor] = useState<INotasValor[]>([]);
    const [show, setShow] = useState(false);
    
    const totalValue = itemValue.iphone + itemValue.galaxy + itemValue.headset + itemValue.mouse + itemValue.teclado + itemValue.gpu;

    const handlePayment = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setTroco(String(Greedy.pay(payedValue, totalValue)));
        const data = Greedy.cal_change(troco);
        if(data.length !== 0){
            setNotasValor(data);
            setShow(!show);
        }
    
    };

    return (
        <div className="side-bar">
            <button className='button-sid-bar' onClick={() => setShowSideBar(false)}>
                <svg className='svg-hamburguer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </button>
            <span>Carinho de Compras</span>
            <div className='tabela-produtos'>
                <TableHeader column1='Produto' column2='Valor'/>
                {itemValue.iphone !== 0 ? <TableRow column1='iPhone 14' column2={'R$ ' + String(itemValue.iphone)} /> : ''}
                {itemValue.galaxy !== 0 ? <TableRow column1='Galaxy S22 Ultra' column2={'R$ ' + String(itemValue.galaxy)} /> : ''}
                {itemValue.headset !== 0 ? <TableRow column1='Headest' column2={'R$ ' + String(itemValue.headset)} /> : ''}
                {itemValue.mouse !== 0 ? <TableRow column1='Mouse' column2={'R$ ' + String(itemValue.mouse)} /> : ''}
                {itemValue.teclado !== 0 ? <TableRow column1='Teclado' column2={'R$ ' + String(itemValue.teclado)} /> : ''}
                {itemValue.gpu !== 0 ? <TableRow column1='Placa de Vídeo' column2={'R$ ' + String(itemValue.gpu)} /> : ''}
            </div>
            <div className='total'>
                <TableRow column1='Total' column2={String(totalValue.toFixed(2))} />
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
            {show ? <>
            <div className='total'>
                <TableRow column1='Troco' column2={'R$ ' + troco} />
            </div>
            <div className='tabela-troco'>
                <TableHeader column1='Nota' column2='Quantidade'/>  
                {notasValor.map((notaValor) => (
                    <TableRow column1={String(notaValor.nota)} column2={String(notaValor.qtd)} />    
                ))}
            </div>
             </> : <></>}
        </div>
    )
}

export default SideBar;
 