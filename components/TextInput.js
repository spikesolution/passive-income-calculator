export default function TextInput({ name, label, value, onChange }) {
  const id = `TextInput-${name}`;
  return (
    <div className="w-4/5">
      <label className="text-gray-700">{label}</label>
      <input type="text" id={id} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name={name} value={value} onChange={ value => onChange(value) } />
    </div>
  );
}
