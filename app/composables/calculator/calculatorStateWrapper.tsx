"use client";

import type { FC, ReactNode } from "react";
import { useValueStore } from "./store";

const CalculatorNotifications: FC<{ children: ReactNode }> = ({ children }) => {
  const { isPrime } = useValueStore();

  const _style = isPrime
    ? "border-lime-500 bg-lime-900/10"
    : "border-white/30 bg-white/10";

  return (
    <div className={`h-full rounded-lg border-4 duration-200 ${_style}`}>
      <div>{children}</div>
    </div>
  );
};

export default CalculatorNotifications;
