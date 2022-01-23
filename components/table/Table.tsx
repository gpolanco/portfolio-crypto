import React, { FC } from "react";
import classNames from "classnames";

interface ITableProps {
  className?: string;
}

export const Table: FC<ITableProps> = ({ children, className }) => {
  return (
    <table className={classNames("table-auto w-full", className)}>
      {children}
    </table>
  );
};
