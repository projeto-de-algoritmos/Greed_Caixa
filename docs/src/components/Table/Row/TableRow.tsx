import './style.css'

interface ITableRow {
    column1: string;
    column2: string;
};

const TableRow = ({ column1, column2 }:ITableRow) => {
    return (
        <div className="table-row">
            <span>{column1}</span>
            <span>{column2}</span>
        </div>
    )
};

export default TableRow;