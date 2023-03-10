import React, { ReactNode } from "react";
import cn from "classnames";

interface HeadingTextProps {
  children: ReactNode;
  alignX?: "left" | "center" | "right";
  alignY?: "top" | "center" | "bottom";
  size?:
    | "text-4xl"
    | "text-3xl"
    | "text-2xl"
    | "text-xl"
    | "text-lg"
    | "text-base";
  isSummer?: boolean;
}

const HeadingText = (props: HeadingTextProps) => {
  const {
    children,
    alignX = "left",
    alignY = "top",
    size = "text-2xl",
    isSummer = true,
  } = props;
  
  const classes = cn("font-bold", "tracking-wide", size, {
    "text-left": alignX === "left",
    "text-center": alignX === "center",
    "text-right": alignX === "right",
    "align-top": alignY === "top",
    "align-middle": alignY === "center",
    "align-bottom": alignY === "bottom",
    "text-winter": !isSummer,
    "text-summer": isSummer,
  });

  return <h1 className={classes}>{children}</h1>;
};

export default HeadingText;
