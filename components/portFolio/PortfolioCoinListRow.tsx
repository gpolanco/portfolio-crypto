import React, { FC } from "react";
import { Coin } from "../../types/Coin";
import { CurrencyFormat } from "../CurrencyFormat";
import { TableColumn } from "../table/TableColumn";
import { TableRow } from "../table/TableRow";
import { PortFolioCoinListDotsButton } from "./PortFolioCoinListDotsButton";

interface IPortfolioCoinListRowProps {
  coin: Coin;
}

export const PortfolioCoinListRow: FC<IPortfolioCoinListRowProps> = ({
  coin,
}) => {
  return (
    <TableRow className="hover:bg-gray-100 hover:cursor-pointer" key={coin.id}>
      <TableColumn>{coin.raking}</TableColumn>
      <TableColumn className="flex gap-x-2 grid-cols-3">
        <div className="w-5">
          <img src={coin.icon} alt={coin.name} />
        </div>
        <strong>{coin.name}</strong>
        <small className="ml-auto">{coin.code}</small>
      </TableColumn>
      <TableColumn textAlign="right">
        <CurrencyFormat value={1.19} />
      </TableColumn>
      <TableColumn textAlign="center">
        <CurrencyFormat value={11} />
      </TableColumn>
      <TableColumn textAlign="right">
        <CurrencyFormat value={13.12} />
      </TableColumn>
      <TableColumn textAlign="right">
        <CurrencyFormat value={3.1} />
      </TableColumn>
      <TableColumn textAlign="right">
        <CurrencyFormat value={20.98} />
      </TableColumn>
      <TableColumn textAlign="right">
        <CurrencyFormat value={0.0009} />
      </TableColumn>
      <TableColumn textAlign="right">
        <CurrencyFormat value={21.42} />
      </TableColumn>
      <TableColumn>
        <PortFolioCoinListDotsButton
          onClick={(id) => console.log(id)}
          id={coin.id}
        />
      </TableColumn>
    </TableRow>
  );
};
