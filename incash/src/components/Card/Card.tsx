import { useState } from 'react';
import { IItemValue } from '../../modal/itemValue';
import './style.css'


interface IBody {
  setItemValue: (IItemValue:IItemValue) => void;
  itemValue: IItemValue;
}

interface ICard extends IBody{
    id: string;
    name: string;
    brand: string;
    price: number;
    image?: string;
}

const Card = ({ id, name, brand, price, image, setItemValue, itemValue }:ICard) => {
    const [selected, setSelected] = useState(false);
    const handleCardClick = () => {
      if (!selected) {
        setItemValue({...itemValue, [id]: price});
      } else {
        setItemValue({...itemValue, [id]: 0});
      }
      setSelected(!selected);
    }
    return (
        <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper" style={selected ? {"border": "solid 3px black"} : {}} onClick={handleCardClick}>
              <div className="box-up">
                <img className="img" src={image} alt=""/>
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">{name}</span>
                    <span className="p-company">{brand}</span>
                  </div>
                  {/* <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div> */}
                </div>
              </div>
      
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>
      
                <a className="cart" href="#">
                  <span className="price">R${price}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;