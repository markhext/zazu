import type { FC, ReactNode } from "react";
import CalculatorInput from "./calculatorInput";
import React from "react";

export { CalculatorInput };

export interface PeerPrimeProps {
  label: string;
  id: string;
  children: ReactNode;
}

export const Calculator: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-6 text-white">{children} </div>;
};

export const CalculatorNotifications: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="p-6 text-white">{children} </div>;
};

export const PeerPrime: FC<PeerPrimeProps> = ({ label, children, id }) => {
  return (
    <dl id={id} className="h-12">
      <dt>{label}:</dt>
      <dd>{children}</dd>
    </dl>
  );
};

export const PeerPrimeValue: FC<{ children: ReactNode }> = ({ children }) => {
  return <strong className="text-lg">{children}</strong>;
};
