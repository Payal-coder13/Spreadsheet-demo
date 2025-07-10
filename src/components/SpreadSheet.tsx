import React, { useEffect, useRef, useState } from "react";
import Spreadsheet from "react-spreadsheet"


const initialRows = 25;
const initialCols = 12;

type Cell = {
  value: string;
};

type Matrix<T> = T[][];

const SpreadsheetGrid: React.FC = () => {
  const [data, setData] = useState<Matrix<Cell>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize blank sheet
  useEffect(() => {
    const blankData: Matrix<Cell> = Array.from({ length: initialRows }, () =>
      Array.from({ length: initialCols }, () => ({ value: "" }))
    );
    setData(blankData);
  }, []);

  const addMoreRows = () => {
    const newRows = Array.from({ length: 10 }, () =>
      Array.from({ length: data[0]?.length || initialCols }, () => ({ value: "" }))
    );
    setData((prev) => [...prev, ...newRows]);
  };

  const addMoreColumns = () => {
    const updated = data.map((row) => [
      ...row,
      ...Array.from({ length: 5 }, () => ({ value: "" })),
    ]);
    setData(updated);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const {
      scrollTop,
      scrollHeight,
      clientHeight,
      scrollLeft,
      scrollWidth,
      clientWidth,
    } = container;

    // Near bottom
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      addMoreRows();
    }

    // Near right edge
    if (scrollLeft + clientWidth >= scrollWidth - 20) {
      addMoreColumns();
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100">
      <div
        ref={containerRef}
        className="h-full w-full overflow-auto bg-white fixed"
        onScroll={handleScroll}
      >
        <Spreadsheet data={data} onChange={(newData) => setData(newData as Matrix<Cell>)} columnLabels={["Job Request","Submitted","Status","Submitter","URL","Assigned","Priority","Due Date","Est. Value"]} />
      </div>
    </div>
  );
};

export default SpreadsheetGrid;
