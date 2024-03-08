"use client";

import { nextPrime, previousPrime } from "@/app/utils/primeNumber";
import { useValueStore } from "./store";
import { useCallback } from "react";

export const CalculatorNextPrime = () => {
  const { value, keyActive } = useValueStore();

  // Prevents component re-running the loop unless the prime number has changed
  const getNextPrime = useCallback(() => {
    if (keyActive) return "";
    return nextPrime(value);
  }, [value, keyActive]);

  return (
    <dl className="h-12">
      <dt>Next prime:</dt>
      <dd>
        <strong className="text-lg">{getNextPrime()}</strong>
      </dd>
    </dl>
  );
};

export const CalculatorPreviousPrime = () => {
  const { value, keyActive } = useValueStore();

  // Prevents component re-running the loop unless the prime number has changed
  const getPreviousPrime = useCallback(() => {
    if (keyActive) return "";
    return previousPrime(value);
  }, [value, keyActive]);

  return (
    <dl className="h-12">
      <dt>Previous prime:</dt>
      <dd>
        <strong className="text-lg">{getPreviousPrime()}</strong>
      </dd>
    </dl>
  );
};
