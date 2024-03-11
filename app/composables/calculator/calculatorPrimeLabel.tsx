"use client";

import { Badge } from "@/app/common/badge";
import { useValueStore } from "./store";

const CalculatorPrimeLabel = () => {
  const { isPrime } = useValueStore();
  return (
    <div className="h-6">
      <Badge variant={isPrime ? "prime" : "default"} id="prime-badge">
        {isPrime ? "THIS IS A PRIME NUMBER" : "THIS IS NOT A PRIME NUMBER"}
      </Badge>
    </div>
  );
};

export default CalculatorPrimeLabel;
