import TextInput from "./TextInput.js";
import { useEffect, useState } from "react";

export default function PassiveIncomeCalculator() {
  const [apr, setApr] = useState(0);
  const [capital, setCapital] = useState(0);
  const [income, setIncome] = useState(0);
  const [fixed, setFixed] = useState("apr");

  useEffect(() => {
    console.log("capital: ", capital);
    console.log("apr: ", apr);
    console.log("income: ", income);

    const monthlyIncome = (capital * (apr/100)) / 12;
    console.log("monthlyIncome", monthlyIncome);
    setIncome(monthlyIncome);
  });

  const changeCapital = ev => {
    if (fixed !== "capital") {
      setCapital(numericValue(ev.target.value));
    }
  }

  const changeIncome = ev => {
    if (fixed !== "income") {
      setIncome(numericValue(ev.target.value));
    }
  }

  const changeApr = ev => {
    if (fixed !== "apr") {
      setApr(numericValue(ev.target.value));
    }
  }

  const numericValue = value => {
    if (value === "") return "";

    const v = parseFloat(value);
    return isNaN(v) ? 0 : v;
  }

  return (
    <div>

      <TextInput
        name="capital"
        label="Capital ($)"
        value={capital}
        onChange={changeCapital}
        isFixed={fixed === "capital"}
      />

      <TextInput
        name="apr"
        label="APR (%)"
        value={apr}
        onChange={changeApr}
        isFixed={fixed === "apr"}
      />

      <TextInput
        name="income"
        label="Income ($/month)"
        value={income}
        onChange={changeIncome}
        isFixed={fixed === "income"}
      />

    </div>
  );
}
