import Logo from "./common/logo";

import { Calculator, CalculatorInput } from "./composables/calculator";
import CalculatorMessages from "./composables/calculator/calculatorMessages";
import CalculatorPrimeLabel from "./composables/calculator/calculatorPrimeLabel";
import {
  CalculatorNextPrime,
  CalculatorPreviousPrime,
} from "./composables/calculator/calculatorPrimePeers";
import CalculatorNotifications from "./composables/calculator/calculatorStateWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <div className="container min-h-screen grid-cols-2 gap-24 py-12 lg:grid">
        <section className="flex flex-col justify-center">
          <div className="mb-12">
            <Logo />
            <h1 className="py-3 text-2xl font-thin">
              Zazu Prime Number Calculator
            </h1>
          </div>
        </section>
        <aside className="flex flex-col justify-center">
          <div className="w-full rounded-lg shadow-2xl">
            <CalculatorNotifications>
              <Calculator>
                <div className="pb-3">
                  <CalculatorPrimeLabel />
                </div>
                <CalculatorInput />
                <div className="mt-6 grid grid-cols-2 rounded-md border-2 border-fuchsia-400 p-3 py-3 text-sm shadow-md">
                  <CalculatorPreviousPrime />
                  <CalculatorNextPrime />
                </div>
                <CalculatorMessages />
              </Calculator>
            </CalculatorNotifications>
          </div>
        </aside>
      </div>
    </main>
  );
}
