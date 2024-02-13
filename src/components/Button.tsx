import React from "react";
import { MainColor } from "../utils";

type ButtonProps = {
  children: React.ReactNode;
  classes?: string;
};

const Button = ({ children, classes }: ButtonProps) => {
  return (
    <button
      className={`${MainColor} p-4 bg-[#056df5] text-white ${classes} hover:text-[#056df5] hover:bg-white transform transition border-[#056df5] border-2 text-sm  -translate-x-[50%] z-50`}
    >
      {children}
    </button>
  );
};

export default Button;
