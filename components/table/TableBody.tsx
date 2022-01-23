import React, { FC } from "react";
import classNames from "classnames";

interface ITableBodyProps {
  className?: string;
}

export const TableBody: FC<ITableBodyProps> = ({ children, className }) => {
  return (
    <tbody
      className={classNames("text-sm divide-y divide-gray-100", className)}
    >
      {children}
    </tbody>
  );
};
