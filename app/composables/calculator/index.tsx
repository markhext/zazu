import type { FC, ReactNode } from "react";
import CalculatorInput from "./calculatorInput";

export { CalculatorInput };

export const Calculator: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-6 text-white">{children} </div>;
};

export const CalculatorNotifications: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="p-6 text-white">{children} </div>;
};
