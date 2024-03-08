// MATh.sqrt for optimising the loop
export const isPrime = (value: number) => {
  if (value <= 1) return false;
  for (let i = 2, s = Math.sqrt(value); i <= s; i++) {
    if (value % i === 0) return false;
  }
  return value > 1;
};

export const nextPrime = (value: number) => {
  let prime = value;
  let found = false;

  if (prime <= 1) return 2;

  while (!found) {
    prime++;
    if (isPrime(prime)) {
      found = true;
    }
  }
  return prime;
};

export const previousPrime = (value: number) => {
  let prime = value;
  let found = false;

  if (prime <= 2) return 0;
  if (prime <= 3) return 2;

  while (!found) {
    prime--;
    if (isPrime(prime)) {
      found = true;
    }
  }
  return prime;
};
