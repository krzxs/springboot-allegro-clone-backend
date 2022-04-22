import React from "react";
import { CarbonIconType } from "@carbon/icons-react";
import cn from "classnames";
import s from "./Button.module.css";

console.log(s);
interface buttonProps {
  text: string;
  icon?: CarbonIconType;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  onClick?: (event: any) => any;
}

function Button(props: buttonProps) {
  const {
    text,
    icon,
    className,
    size = "medium",
    variant = "primary",
    onClick,
  } = props;
  const classes = cn(size && s.medium);

  console.log(s);
  console.log(classes);
  console.log(s.medium);
  return <button className={s.default.medium}>{text}</button>;
}

export default Button;
