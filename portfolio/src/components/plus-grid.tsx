"use client";

import { useEffect, useState } from "react";

const PlusGrid = () => {
  const [plusSigns, setPlusSigns] = useState<string[]>([]);

  useEffect(() => {
    // Generate a much larger grid to ensure full coverage
    const grid = [];
    const rows = 100; // Many more rows to ensure full height coverage
    const cols = 120; // Many more columns to ensure full width coverage
    
    for (let i = 0; i < rows; i++) {
      let row = "";
      for (let j = 0; j < cols; j++) {
        row += "+ ";
      }
      grid.push(row);
    }
    
    setPlusSigns(grid);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full">
      <div className="plus-grid-animation w-full h-full">
        {plusSigns.map((row, index) => (
          <div 
            key={index} 
            className="font-sans text-xl leading-none whitespace-pre w-full"
            style={{
              fontSize: 'clamp(12px, 1.5vw, 24px)',
              lineHeight: '1.2',
              color: 'hsl(var(--primary) / 0.02)'
            }}
          >
            {row}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlusGrid;
