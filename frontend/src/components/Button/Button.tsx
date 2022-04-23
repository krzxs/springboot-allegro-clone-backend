import React from "react";
import { CarbonIconType } from "@carbon/icons-react";
import cn from "classnames";

interface buttonProps {
  text: string;
  icon?: CarbonIconType;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  scalable?: true | false;
  onClick?: (event: any) => any;
}

function Button(props: buttonProps) {
  const {
    text,
    icon,
    className,
    size = "small",
    variant = "primary",
    scalable = false,
    onClick,
  } = props;

  return (
    <button
      className={cn(
        "flex items-center justify-center border-2 transition-transform",
        {
          "p-4": size === "medium",
          "p-2": size === "small",
          "p-6": size === "large",
          "hover:scale-105 hover:shadow-md": scalable,
        }
      )}
    >
      {text}
    </button>
  );
}

export default Button;
