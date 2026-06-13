import type { ReactNode } from "react";

type ContainerVariant = "default" | "wide";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  variant?: ContainerVariant;
  as?: "div" | "section" | "nav" | "header" | "footer";
}

const base = "mx-auto px-5 sm:px-8 2xl:px-12";

const widthClasses: Record<ContainerVariant, string> = {
  // Primary page content width. Slightly relaxed at higher breakpoints so grids and side-by-side layouts can expand
  // while prose inside individual cards/blocks stays sensibly narrow via their own max-w-* caps.
  default:
    "max-w-6xl xl:max-w-7xl 2xl:max-w-[88rem]",
  // Use sparingly for inner layout surfaces that benefit from going a little wider than the main page container
  // (e.g. a services grid block or hero mode cards row). Still never lets text blocks run wild.
  wide:
    "max-w-7xl 2xl:max-w-[96rem]",
};

export default function Container({
  children,
  className = "",
  variant = "default",
  as: Tag = "div",
}: ContainerProps) {
  const width = widthClasses[variant];
  const classes = `${base} ${width}${className ? ` ${className}` : ""}`;

  return <Tag className={classes}>{children}</Tag>;
}
