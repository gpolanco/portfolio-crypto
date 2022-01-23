import { getUUID } from "../lib/uuid";
import { Coin } from "../types/Coin";
import { default as coins } from "./coins.json";

export const getAllCoins = (): Coin[] => {
  return coins.map((coin: Coin) => coin);
};
