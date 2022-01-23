import classNames from "classnames";
import React, { FC } from "react";

interface ICardBodyProps {
  className?: string;
}

export const CardBody: FC<ICardBodyProps> = ({ children, className }) => {
  return (
    <div className={classNames("p-3", className)}>
      <div className="overflow-y-visible">{children}</div>
    </div>
  );
};
