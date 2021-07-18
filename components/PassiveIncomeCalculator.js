import TextInput from "./TextInput.js";
import { useEffect, useState } from "react";

export default function PassiveIncomeCalculator() {
  const [apr, setApr] = useState(0);
  const [capital, setCapital] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    console.log("capital: ", capital);
    console.log("apr: ", apr);
    console.log("income: ", income);

    const monthlyIncome = (capital * (apr/100)) / 12;
    console.log("monthlyIncome", monthlyIncome);
    setIncome(monthlyIncome);
  });

  const changeCapital = ev => {
    setCapital(numericValue(ev.target.value));
  }

  const changeIncome = ev => {
    setIncome(numericValue(ev.target.value));
  }

  const changeApr = ev => {
    setApr(numericValue(ev.target.value));
  }

  const numericValue = value => {
    if (value === "") return "";

    const v = parseFloat(value);
    return isNaN(v) ? 0 : v;
  }

  return (
    <div>
      <TextInput name="capital" label="Capital ($)" value={capital} onChange={changeCapital} />
      <TextInput name="apr" label="APR (%)" value={apr} onChange={changeApr} />
      <TextInput name="income" label="Income ($/month)" value={income} onChange={changeIncome} />
    </div>
  );
}
