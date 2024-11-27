import "./style.scss";

import clsx from "clsx";
import type { ComponentChildren } from "preact";

type Props = {
  text: string;
  children?: ComponentChildren;
  onClick?: () => void;
  size?: "small" | "normal" | "large";
  type?: string;
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
