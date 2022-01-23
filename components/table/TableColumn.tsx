import React, { FC } from "react";
import classNames from "classnames";

interface ITableHeadColumnProps {
  textAlign?: "left" | "center" | "right";
  color?: "danger" | "success";
  isBold?: boolean;
  tag?: "th" | "td";
  className?: string;
}

export const TableColumn: FC<ITableHeadColumnProps> = ({
  children,
  color,
  textAlign = "left",
  isBold = false,
  tag: Tag = "td",
  className,
}) => {
  if (!children) {
    return null;
  }

  return (
    <Tag className="p-2 whitespace-nowrap">
      <div
        className={classNames(className, {
          "text-left": textAlign === "left",
          "text-center": textAlign === "center",
          "text-right": textAlign === "right",
          "text-gray-800": !Boolean(color),
          "text-green-500": color === "success",
          "text-red-400": color === "danger",
          "font-semibold": isBold,
        })}
      >
        {children}
      </div>
    </Tag>
  );
};
