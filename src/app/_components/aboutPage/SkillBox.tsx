import React from "react";

interface props {
  cols: number;
  rows: number;
  children: React.ReactNode;
  square?: boolean;
  className?: string;
}

const SkillBox = ({ cols, rows, children, square, className }: props) => {
  if (cols && rows)
    return (
      <div
        className={`p-4 bg-lightBlue rounded-xl col-span-${cols}  row-span-${rows} ${
          square && "lg:aspect-square"
        } ${className}`}
      >
        {children}
      </div>
    );
};

export default SkillBox;
