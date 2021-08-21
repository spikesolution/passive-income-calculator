export default function LockButton({ locked, onClick }) {
  const commonClasses = "ml-4 text-white w-full h-10 text-center text-base font-semibold shadow-md rounded-lg";

  const lockedClasses = `${commonClasses} bg-red-400`;
  const unlockedClasses = `${commonClasses} bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 transition ease-in duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`;

  const html = locked ?
    <button type="button" className={lockedClasses}>Locked</button>
    :
    <button type="button" className={unlockedClasses} onClick={onClick} >Lock</button>
    ;
  return html;
}
