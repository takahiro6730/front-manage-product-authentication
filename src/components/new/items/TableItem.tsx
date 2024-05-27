import { useState, useRef, MouseEvent } from 'react';
import styles from './item.module.css';

const TableItem = () => {
    const numRows = 8;
    const numCols = 8;
    const gridContainerRef = useRef<HTMLDivElement>(null);
    const [selectPanel, setSelectPanel] = useState(true);
    const [selectedDimensions, setSelectedDimensions] = useState({ rows: 0, cols: 0 });

    const highlightCells = (event: MouseEvent<HTMLDivElement>) => {
        const cells = Array.from(gridContainerRef.current?.children || []);
        const index = cells.indexOf(event.target as HTMLDivElement);
        const row = Math.floor(index / numCols) + 1;
        const col = (index % numCols) + 1;
        resetHighlight();
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                (cells[i * numCols + j] as HTMLDivElement).style.backgroundColor = "#add8e6";
            }
        }
    };

    const resetHighlight = () => {
        const cells = Array.from(gridContainerRef.current?.children || []);
        for (let cell of cells) {
            (cell as HTMLDivElement).style.backgroundColor = "#fff";
        }
    };

    const createTable = (event: MouseEvent<HTMLDivElement>) => {
        const cells = Array.from(gridContainerRef.current?.children || []);
        const index = cells.indexOf(event.target as HTMLDivElement);
        const row = Math.floor(index / numCols) + 1;
        const col = (index % numCols) + 1;
        setSelectedDimensions({ rows: row, cols: col });
        setSelectPanel(false);
    };

    return (
        <div>
            {selectPanel && (
                <div ref={gridContainerRef} className={styles.table_grid}>
                    {Array.from({ length: numRows * numCols }).map((_, i) => (
                        <div
                            key={'drawTable' + i}
                            onMouseOver={highlightCells}
                            onClick={createTable}
                        />
                    ))}
                </div>
            )}
            <div className={styles.table_tableContainer}>
                {selectedDimensions.rows > 0 && (
                    <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                            {Array.from({ length: selectedDimensions.rows }).map((_, rowIndex) => (
                                <tr key={'row'+ rowIndex} className={rowIndex === 0 ? styles['first-row'] : ''}>
                                    {Array.from({ length: selectedDimensions.cols }).map((_, colIndex) => (
                                        <td
                                            key={'col' + colIndex}
                                            className={colIndex === 0 ? styles['first-column'] : ''}
                                            style={{ border: '1px solid #e4e4e4' }}
                                        >
                                            <input
                                                type="text"
                                                className={`${ (rowIndex === 0 || colIndex === 0) ? 'bg-[#f5f6f9]' : '' } text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none`}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default TableItem;
