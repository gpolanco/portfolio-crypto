import classNames from "classnames";
import React, { FC } from "react";

interface ICardProps {
  className?: string;
}

export const Card: FC<ICardProps> = ({ children, className }) => {
  return (
    <section className={classNames(className)}>
      <div className="flex flex-col justify-center h-full">
        <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200">
          {children}
        </div>
      </div>
    </section>
  );
};
