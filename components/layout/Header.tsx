import Link from "next/link";
import React, { FC } from "react";
import { CoinStackIcon } from "../icons/CoinStackIcon";
import { CurrencyChangeIcon } from "../icons/CurrencyChangeIcon";
import { Menu } from "./Menu";

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = ({ children }) => {
  return (
    <header className="bg-white shadow-sm mb-4">
      <div className="max-w-7xl mx-auto px-4 flex">
        <Link href="/">
          <a
            title="My portfolio"
            className="font-semibold text-xl flex items-center text-emerald-600"
          >
            <CurrencyChangeIcon className="mr-1 w-8 h-8" />
            My Portfolio
          </a>
        </Link>
        <Menu className="ml-auto" />
      </div>
    </header>
  );
};
