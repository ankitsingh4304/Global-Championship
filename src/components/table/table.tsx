import './table.scss';

interface TableProps {
    columns: string[];
    rows: string[][];
    onRowClick: (index: number, row: string[]) => void;
}


export default function Table({ columns, rows, onRowClick }: TableProps) {
    return (
        <table id='custom-table' className="min-w-full divide-y ">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={column + index} className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y">
                {rows.map((row, rowIndex) => (
                    <tr
                        key={'row' + rowIndex}
                        onClick={() => onRowClick(rowIndex, row)}
                    >
                        {row.map((cell, cellIndex) => (
                            <td key={'row' + rowIndex + ', cell' + cellIndex} className="px-6 py-4 whitespace-nowrap text-lg">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}