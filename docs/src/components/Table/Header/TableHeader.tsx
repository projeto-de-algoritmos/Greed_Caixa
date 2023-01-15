import './style.css'

interface ITableHeader {
    column1: string;
    column2: string;
};

const TableHeader = ({ column1, column2 }:ITableHeader) => {
    return (
        <div className='table-header'>
            <span>{column1}</span>
            <span>{column2}</span>
        </div>
    )
};

export default TableHeader;