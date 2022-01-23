import React, { FC } from "react";
import classNames from "classnames";
import { TableColumn } from "./TableColumn";

interface ITableHeadProps {
  className?: string;
}

export const TableHead: FC<ITableHeadProps> = ({ children, className }) => {
  return (
    <thead
      className={classNames(
        "text-xs font-semibold uppercase text-gray-400 bg-gray-50",
        className
      )}
    >
      <tr>{children}</tr>
    </thead>
  );
};
