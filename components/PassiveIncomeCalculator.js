import TextInput from "./TextInput.js";
import { useState } from "react";

export default function PassiveIncomeCalculator() {
  const [apr, setApr] = useState(0);
  const [capital, setCapital] = useState(0);
  const [income, setIncome] = useState(0);

  const changeCapital = ev => { setCapital(ev.target.value); }
  const changeIncome = ev => { setIncome(ev.target.value); }
  const changeApr = ev => { setApr(ev.target.value); }

  return (
    <div>
      <TextInput name="capital" label="Capital ($k)" value={capital} onChange={changeCapital} />
      <TextInput name="apr" label="APR (%)" value={apr} onChange={changeApr} />
      <TextInput name="income" label="Income ($k/month)" value={income} onChange={changeIncome} />
    </div>
  );
}
