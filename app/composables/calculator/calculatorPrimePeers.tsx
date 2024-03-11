"use client";

import { nextPrime, previousPrime } from "@/app/utils/primeNumber";
import { useValueStore } from "./store";
import { useCallback } from "react";
import { PeerPrime, PeerPrimeValue } from ".";

export const CalculatorNextPrime = () => {
  const { value, keyActive } = useValueStore();

  // Prevents component re-running the loop unless the prime number has changed
  const getNextPrime = useCallback(() => {
    if (keyActive) return "";
    return nextPrime(value);
  }, [value, keyActive]);

  return (
    <PeerPrime id="next-prime-number" label="Next prime">
      <PeerPrimeValue>{getNextPrime()}</PeerPrimeValue>
    </PeerPrime>
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
    <PeerPrime id="previous-prime-number" label="Previous prime">
      <PeerPrimeValue>{getPreviousPrime()}</PeerPrimeValue>
    </PeerPrime>
  );
};
