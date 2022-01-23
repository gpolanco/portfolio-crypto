import React, { FC } from "react";

interface ICardHeaderProps {}

export const CardHeader: FC<ICardHeaderProps> = ({ children }) => {
  return (
    <header className="px-5 py-4 border-b border-gray-100">
      <h2 className="font-semibold text-gray-800">Customers</h2>
    </header>
  );
};
