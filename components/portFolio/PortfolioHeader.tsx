import React, { FC } from "react";

interface IPortfolioHeaderProps {}

export const PortfolioHeader: FC<IPortfolioHeaderProps> = ({ children }) => {
  return (
    <div className="mb-4 flex gap-x-4">
      <span className="bg-white border-l-4 border-l-gray-500 w-52 d-inline-block p-4 shadow-md">
        <span className="text-xl font-semibold">360,66&nbsp;US$</span>
        <div className="text-normal text-gray-400 overview-label">
          Total Balance
        </div>
      </span>
      <span className="bg-white border-l-4 border-l-emerald-500 w-52 d-inline-block p-4 shadow-md">
        <span className="text-xl font-semibold text-emerald-500">
          360,66 US$
        </span>
        <div className="text-normal text-gray-400 overview-label">
          Total Profit Loss
        </div>
      </span>
    </div>
  );
};
