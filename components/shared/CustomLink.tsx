/* eslint-disable jsx-a11y/anchor-has-content */
import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";
import Link from "next/link";

type CustomLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  className?: string;
};

export const CustomLink: FC<CustomLinkProps> = ({
  href,
  className,
  ...rest
}) => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={className} {...rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a className={className} href={href} {...rest} />;
  }

  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  );
};
