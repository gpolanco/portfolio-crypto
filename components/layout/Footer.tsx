import React, { FC } from "react";

interface IFooterProps {}

export const Footer: FC<IFooterProps> = ({ children }) => {
  return (
    <footer className="max-w-7xl mx-auto px-4 pt-6 pb-8">
      <div className="text-center text-gray-500">
        © My portfolio - {new Date().getFullYear()}
      </div>
    </footer>
  );
};
