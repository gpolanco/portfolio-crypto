import React, { FC } from "react";
import classNames from "classnames";

import { CustomLink } from "../shared/CustomLink";
import { MenuItem } from "./MenuItem";

interface IMenuProps {
  className?: string;
}

export const Menu: FC<IMenuProps> = ({ className }) => {
  return (
    <nav className={classNames("flex", className)}>
      <MenuItem title="Wallet" href="/">
        wallet
      </MenuItem>
      <MenuItem title="Portfolio" href="/portfolio">
        Portfolio
      </MenuItem>
    </nav>
  );
};
