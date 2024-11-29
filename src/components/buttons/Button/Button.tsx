import "./style.scss";

import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  text: string;
  children?: ReactNode;
  onClick?: () => void;
  size?: "small" | "normal" | "large";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  text,
  type = "button",
  size = "normal",
  disabled = false,
}: Props) => {
  return (
    <button
      type={type}
      className={clsx("btn", `size-${size}`)}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
      {children}
    </button>
  );
};
