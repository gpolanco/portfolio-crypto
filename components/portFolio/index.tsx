import React, { FC, useEffect, useState } from "react";
import { Card } from "../card/Card";
import { CardBody } from "../card/CardBody";
import { PortfolioTargetForm } from "./PortfolioTargetForm";
import { PortfolioCoinList } from "./PortfolioCoinList";
import { getAllCoins } from "../../services/CoinServices";
import { PortfolioHeader } from "./PortfolioHeader";

interface ICoinListProps {}

export const CoinList: FC<ICoinListProps> = ({ children }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setCoins(getAllCoins());
  }, []);

  if (!coins.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="coin-list">
      {/* <Card className="mb-4">
        <CardBody className="grid gap-4 grid-cols-2">
          <PortfolioTargetForm />
        </CardBody>
      </Card> */}
      <PortfolioHeader />
      <PortfolioCoinList coins={coins} />
    </div>
  );
};
