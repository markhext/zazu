import { debounce } from "@/app/utils/debounce";
import { isPrime } from "@/app/utils/primeNumber";
import { create } from "zustand";

interface ValueState {
  value: number;
  isPrime: boolean;
  prime: number;
  keyActive: boolean;
  setValue: (value: number) => void;
  setKeyActive: (setKeyActive: boolean) => void;
}

interface ErrorState {
  message: string | null;
  setError: (message: string | null) => void;
}

export const useValueStore = create<ValueState>()((set) => ({
  value: 0,
  isPrime: false,
  prime: 2,
  keyActive: false,
  setValue: (value) =>
    set((state) => {
      const _isPrime = isPrime(value);
      return {
        value,
        isPrime: _isPrime,
        prime: _isPrime ? value : state.value,
        keyActive: true,
      };
    }),
  setKeyActive: (keyActive) => set(() => ({ keyActive })),
}));

export const useErrorStore = create<ErrorState>()((set) => ({
  message: null,
  setError: (message) => set(() => ({ message })),
}));
