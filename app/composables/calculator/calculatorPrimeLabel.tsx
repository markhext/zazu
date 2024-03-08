"use client";

import { Badge } from "@/app/common/badge";
import { useValueStore } from "./store";

const CalculatorPrimeLabel = () => {
  const { isPrime } = useValueStore();
  return <Badge variant={isPrime ? "secondary" : "strike"}>PRIME</Badge>;
};

export default CalculatorPrimeLabel;
