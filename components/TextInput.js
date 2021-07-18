import LockButton from "./LockButton.js";

export default function TextInput({ name, label, value, onChange, isFixed, buttonClick }) {
  const id = `TextInput-${name}`;
  const fixed = isFixed ? "fixed" : "";
  return (
    <div>
      <label className="text-gray-700">{label}</label>
      <div className="flex">
        <div className="w-2/3">
          <input type="text" id={id} className="w-2/3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name={name} value={value} onChange={ value => onChange(value) } />
        </div>
        <div className="w-1/3">
          <LockButton locked={isFixed} onClick={buttonClick} />
        </div>
      </div>
    </div>
  );
}
