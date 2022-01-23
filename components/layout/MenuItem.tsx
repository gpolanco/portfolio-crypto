import React, { FC } from "react";
import classNames from "classnames";
import { CustomLink } from "../shared/CustomLink";
import { useRouter } from "next/router";

interface IMenuItemProps {
  className?: string;
  href: string;
  title: string;
}

export const MenuItem: FC<IMenuItemProps> = ({
  children,
  className,
  title,
  href,
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <CustomLink
      className={classNames(
        "text-gray-500 hover:text-emerald-600 px-2 py-4 block select-none",
        className,
        {
          "text-emerald-600": isActive,
        }
      )}
      href={href}
      title={title}
    >
      {children}
    </CustomLink>
  );
};
