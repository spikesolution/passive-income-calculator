import TextInput from "./TextInput.js";
import { useEffect, useState } from "react";

export default function PassiveIncomeCalculator() {
  const [apr, setApr] = useState(10);
  const [capital, setCapital] = useState(400000);
  const [income, setIncome] = useState(0);

  const [fixed, setFixed] = useState("capital"); // Which value is "locked"?
  const [changed, setChanged] = useState(null); // Which value did the user change?

  useEffect(() => {
    if (changed === null) return;
    calculateIncome();
    calculateApr();
    calculateCapital();
  });

  // What monthly income do we get from a given APR and capital amount?
  const calculateIncome = () => {
    if (fixed === "income" || changed === "income") return;

    const monthlyIncome = (capital * (apr/100)) / 12;
    setIncome(monthlyIncome);
  }

  // What APR do we need to get the given monthly income from a given capital
  // amount?
  const calculateApr = () => {
    if (fixed === "apr" || changed === "apr") return;

    const yearlyIncome = income * 12;
    const requiredApr = 100 * (yearlyIncome / capital);
    setApr(requiredApr);
  }

  // How much capital do we need to get a target monthly income from a given
  // APR?
  const calculateCapital = () => {
    if (fixed === "capital" || changed === "capital") return;

    const yearlyIncome = income * 12;
    const capitalRequired = yearlyIncome / (apr/100);
    setCapital(capitalRequired);
  }

  const changeCapital = ev => {
    if (fixed === "capital") return;

    setCapital(numericValue(ev.target.value));
    setChanged("capital");
  }

  const changeIncome = ev => {
    if (fixed === "income") return;

    setIncome(numericValue(ev.target.value));
    setChanged("income");
  }

  const changeApr = ev => {
    if (fixed === "apr") return;

    setApr(numericValue(ev.target.value));
    setChanged("apr");
  }

  const numericValue = value => {
    if (value === "") return "";

    const v = parseFloat(value);
    return isNaN(v) ? 0 : v;
  }

  return (
    <div className="w-full">

      <TextInput
        name="capital"
        label="Capital ($)"
        value={capital}
        onChange={changeCapital}
        isFixed={fixed === "capital"}
        buttonClick={() => setFixed("capital")}
      />

      <TextInput
        name="apr"
        label="APR (%)"
        value={apr}
        onChange={changeApr}
        isFixed={fixed === "apr"}
        buttonClick={() => setFixed("apr")}
      />

      <TextInput
        name="income"
        label="Income ($/month)"
        value={income}
        onChange={changeIncome}
        isFixed={fixed === "income"}
        buttonClick={() => setFixed("income")}
      />

    </div>
  );
}
