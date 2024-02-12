import React from "react";
import { MainColor } from "../utils";

type ButtonProps = {
  children: React.ReactNode;
  classes?: string;
};

const Button = ({ children, classes }: ButtonProps) => {
  return (
    <button
      className={`${MainColor} p-4 bg-[#AE172A] text-white ${classes} hover:text-[#AE172A] hover:bg-white transform transition border-[#AE172A] border-2 text-sm  -translate-x-[50%] z-50`}
    >
      {children}
    </button>
  );
};

export default Button;
