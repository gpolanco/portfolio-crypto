import React, { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface ILayoutProps {}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
