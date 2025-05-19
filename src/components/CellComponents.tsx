import type { FC } from "react";
import type { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  onClick: (cell: Cell) => void;
}

export const CellComponents: FC<CellProps> = ({ cell, selected, onClick }) => {
  return (
    <div
      className={[
        "cell",
        cell.color,
        selected ? "selected" : "",
        cell.available && cell.figure ? "cell-available" : "",
      ].join(" ")}
      onClick={() => onClick(cell)}>
      {cell.available && !cell.figure && <div className="available"></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="figure" />}
    </div>
  );
};
