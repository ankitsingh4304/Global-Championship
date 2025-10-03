//import './table.scss';

interface TableProps {
  columns: string[];
  rows: string[][];
  onRowClick: (index: number, row: string[]) => void;
}

export default function Table({ columns, rows, onRowClick }: TableProps) {
  return (
    <div className="w-full max-w-7xl mx-auto max-h-[80vh] overflow-y-auto overflow-hidden rounded-4xl  shadow-2xl bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <table id="custom-table" className="min-w-full ">
        <thead className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 sticky top-0 z-10 shadow-md">
          <tr>
            {columns.map((column, index) => (
              <th
                key={column + index}
                className="px-6 py-4 text-center text-lg font-bold tracking-wide text-white uppercase"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 ">
          {rows.map((row, rowIndex) => (
            <tr
              key={"row" + rowIndex}
              onClick={() => onRowClick(rowIndex, row)}
              className="group cursor-pointer transition-all duration-300 text-center hover:bg-gradient-to-r hover:from-teal-50 hover:via-cyan-50 hover:to-blue-50 hover:shadow-lg hover:scale-[1.02] transform hover:-translate-y-0.5 bg-white"
              style={{
                animation: `fadeIn 0.3s ease-out ${rowIndex * 0.05}s backwards`,
              }}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={"row" + rowIndex + ", cell" + cellIndex}
                  className="px-6 py-4 text-xl font-medium text-slate-700 break-words whitespace-normal max-w-[140px]"
                >
                  <span className="group-hover:translate-x-1  transition-transform duration-300">
                    {cell}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
    </div>
  );
}
