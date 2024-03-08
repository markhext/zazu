"use client";
import { useCallback } from "react";
import { useErrorStore } from "./store";

const CalculatorMessage = () => {
  const { message } = useErrorStore();

  const getMessage = useCallback(() => {
    if (message) return message;
    return;
  }, [message]);

  if (!message) {
    return (
      <div className="mt-3 h-32 rounded-md border border-transparent bg-white/10 p-3 text-sm text-white">
        <h2 className="text-xl font-bold">
          Welcome to the Find Prime Number application
        </h2>
        <p className="mb-6 opacity-80">
          Enter a number into the input field above using your number pad. The
          box wil light up green when you find a prime number
        </p>
      </div>
    );
  }

  return (
    <div
      className={`mt-3 h-32 rounded-md border-4 border-red-500  p-3 text-sm text-white`}
    >
      {getMessage()}
    </div>
  );
};

export default CalculatorMessage;
