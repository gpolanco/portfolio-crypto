import React, { FC } from "react";
import classNames from "classnames";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

export const Input: FC<IInputProps> = ({
  children,
  className,
  label,
  type = "text",
  ...props
}) => {
  return (
    <div className={classNames(className)}>
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        {...props}
        className={classNames(
          "w-full rounded-md border border-gray-200 p-2 py-2 px-5 focus-visible:shadow-none outline-none text-base text-body-color focus:border-primary"
        )}
      />
    </div>
  );
};
