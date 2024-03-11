# ZAZU - Prime Number Application

First, run the development server:

```
pnpm dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Composables

Here I am use a composable modal, based on Atomic design. Find `app/page.tsx` to see the implementation of this composable component. The composable component is made up of smaller components (Atoms, Molecuals) to compose a reusable component that can be adapted and modified for any scenario, without the need of complex prop configuration.

This approach also work very well with the latest version of Next JS, as `use client` components are are parsed through `server components`, reducing the overall JS size and allowing the app to load before the JS bundle is executed on the browser.

## Zustand - State Managemnt

I have implemeted Zustand for state managment as its light-weight and fast. I find Zustand works well with the composable component pattern as it gives greater control of what gets re-rendered [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

## Prime numbers

I have added the logic for prime numbers in `app/utils/primeNumbers.tsx`

There are three functions that calculate IF a value is a prime number and what the next and previous prime numbers are.

The first function uses a square root method to reduce the loop length on larger numbers and increase performance

### Next and Previous Primes

These functions iterate up and down from the current value until it finds a prime number. This of course can cause performance issues if called multiple time in rapid succession.

As a feature, I wanted to enable the user use the UP and DOWN arrows to increament and decrement the value, allowing the user to scrub through values quickly. This of course required consideration to performance.

With the use of state managment and a `deboaunce` function, if keys are pressed in rapid succession or if the input value is operated via the UP & DOWN arrows, the call the calculate the next and previous prime number is ignored untill 500 ms has passed from the last keyboard in put.

## Error handling

I have left the error handling logic in `app/composables/calculator/calculatorInput.tsx`

Normally I would put these in a sperate utility file, however I felt it was easier to follow the logic from this file.

By entering `.` or and negative value `-`... Or and very large number (Anything above a 32BIT interger) Will trigger and error message via Zustand

## Performance

I have limitted the MAX value to `4.3Billion` (32BIT interger) which provides a stable experience. Although JS Intergers can go upto 64BIT Intergers. The application may become unstable with such high numbers.

However, I have left the code in place for you to test the performance with a MAX VALUE 64BIT integer, if you want to try it out. This will alow you to go the JS Max value of `9007199254740991` I think thats about 9 quadrillion

Just comment out the first line and uncomment out the second line

```
const MAX_SAFE_INTEGER = 4294967295; // MAX 32 bit number

//const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER // MAX 64 bit number;
```

## Testing with Cypress

You must ensure the local dev environment is running:

```
pnpm dev

```

Open another terminal tab and run the cypress script:

```
pnpm cy:open

```

This will open the Cypress E2E test environment. Tests for this application are in the file called `prime-numbers` - click to run tests
