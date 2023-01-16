import './style.css'

interface IHeader {
    setShowSideBar: (boolean: boolean)=> void
}

const Header = ({setShowSideBar}:IHeader) => {
    return (
        <div className="header">
            <button className='button-svg-header' onClick={() => setShowSideBar(true)}>
                <svg className='svg-hamburguer-header' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </button>
            <h2 className='title'>inCash</h2>
            <span className='description'>Pague suas compras à vista no dinheiro e veja quanto receberá de troco com o menor numero de cédulas possíveis</span>
        </div>
    );
}

export default Header;