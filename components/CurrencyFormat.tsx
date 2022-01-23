import React, { FC } from "react";

interface ICurrencyFormatProps {
  value: number;
}

export const CurrencyFormat: FC<ICurrencyFormatProps> = ({ value }) => {
  return <div className="CurrencyFormat">{value}</div>;
};
