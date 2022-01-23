import React, { FC } from "react";
import { Coin } from "../../types/Coin";
import { Card } from "../card/Card";
import { CardBody } from "../card/CardBody";
import { CurrencyFormat } from "../CurrencyFormat";
import { Table } from "../table/Table";
import { TableBody } from "../table/TableBody";
import { TableColumn } from "../table/TableColumn";
import { TableHead } from "../table/TableHead";
import { TableRow } from "../table/TableRow";
import { PortfolioCoinListRow } from "./PortfolioCoinListRow";

interface ICoinTableProps {
  coins: Coin[];
}

export const PortfolioCoinList: FC<ICoinTableProps> = ({ coins }) => {
  return (
    <Card>
      <CardBody className="overflow-x-scroll">
        <Table>
          <TableHead>
            <TableColumn className="w-2 text-center" tag="th">
              #
            </TableColumn>
            <TableColumn tag="th">Moneda</TableColumn>
            <TableColumn textAlign="right" tag="th">
              Precio compra
            </TableColumn>
            <TableColumn textAlign="center" tag="th">
              Cantidad
            </TableColumn>
            <TableColumn textAlign="right" tag="th">
              Inversión
            </TableColumn>
            <TableColumn textAlign="right" tag="th">
              Precio ATH
            </TableColumn>
            <TableColumn textAlign="right" tag="th">
              Ganancias ATH
            </TableColumn>
            <TableColumn textAlign="right" tag="th">
              Ganancias
            </TableColumn>
            <TableColumn textAlign="right" tag="th">
              Precio venta
            </TableColumn>
            <TableColumn />
          </TableHead>
          <TableBody>
            {coins.map((coin) => (
              <PortfolioCoinListRow coin={coin} />
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};
