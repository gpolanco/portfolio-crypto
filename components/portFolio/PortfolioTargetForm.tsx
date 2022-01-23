import classNames from "classnames";
import React, { FC, useMemo } from "react";

import { getAllCoins } from "../../services/CoinServices";

import { Input } from "../Input";
import { SelectValueType } from "../reactSelect/types";

interface ICoinListFormProps {
  className?: string;
}

export const PortfolioTargetForm: FC<ICoinListFormProps> = ({
  children,
  className,
}) => {
  const coinsSelectOptions: SelectValueType[] = useMemo(() => {
    return getAllCoins().map((coin) => ({
      label: coin.name,
      value: coin.id,
    }));
  }, []);

  return (
    <div className="grid gap-x-2 grid-cols-3">
      <Input
        type="number"
        name="sellingPriceDesired"
        placeholder="Precio de venta"
        className="w-full"
      />
      <Input
        className="w-full"
        type="number"
        name="profitsDesired"
        placeholder="Precio de venta"
      />

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Apply
      </button>
    </div>
  );
};
