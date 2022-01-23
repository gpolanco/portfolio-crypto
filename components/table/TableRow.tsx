import React, { FC } from "react";

interface ITableRowProps {
  className?: string;
}

export const TableRow: FC<ITableRowProps> = ({ children, className }) => {
  if (!children) {
    return null;
  }

  return <tr className={className}>{children}</tr>;
};
