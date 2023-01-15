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
      {showSideBar ? <SideBar itemValue={itemValue} setShowSideBar={setShowSideBar} /> : <></> }
      <Header setShowSideBar={setShowSideBar}/>
      <Body setItemValue={setItemValue} itemValue={itemValue} />
    </React.Fragment>
  );
}

export default App;
