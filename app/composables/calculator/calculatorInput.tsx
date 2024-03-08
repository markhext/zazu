"use client";
import React from "react";
import { useErrorStore, useValueStore } from "./store";
import { debounce } from "@/app/utils/debounce";

const MAX_SAFE_INTEGER = 4294967295; // MAX 32 bit number

//const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

const CalculatorInput = () => {
  const { value, setValue, setKeyActive } = useValueStore();
  const { setError } = useErrorStore();

  // NOTE! - Normally I would place this is a seperate file. However I have left the Error Handling here so it can be viewed easily
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.split("").includes("-")) {
      setError(
        "Dont be silly! You can't use negative values for prime numbers.",
      );
      return;
    }

    if (e.currentTarget.value.split("").includes(".")) {
      setError(
        "Oh no! You can't us a decimal place when searching for a prime number",
      );
      return;
    }

    const _inputValue = Math.floor(Number(e.currentTarget.value)); // coerse to number type

    if (_inputValue > MAX_SAFE_INTEGER) {
      setError(
        `Wow! This is a really BIG number. This application starts to struggle numbers greater than 32BIT. But Hey!, finding prime numbers upto 4.3 Billion is still pretty good. The maximum number we can handle is ${MAX_SAFE_INTEGER} `,
      );
      return;
    }

    setValue(_inputValue);
    setError(null);
  };

  return (
    <>
      <input
        onChange={onChange}
        autoFocus
        onKeyUp={debounce(() => setKeyActive(false), 500)}
        type="number"
        value={value.toString()}
        pattern="[0-9]"
        className="focus-visible:ring-ring w-full rounded-lg bg-white/10 p-6 text-right text-4xl font-bold ring-white/50 focus-visible:border-zinc-500 focus-visible:outline-none focus-visible:ring-1"
      />
    </>
  );
};

export default CalculatorInput;
