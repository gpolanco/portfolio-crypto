import React, { FC, useCallback } from "react";

interface IPortFolioCoinListDotsButtonProps {
  id: string;
  onClick?: (id: string) => void;
}

export const PortFolioCoinListDotsButton: FC<
  IPortFolioCoinListDotsButtonProps
> = ({ id, onClick }) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(id);
    }
  }, [id]);

  return (
    <button
      className="bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-300"
      onClick={handleClick}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </svg>
    </button>
  );
};
