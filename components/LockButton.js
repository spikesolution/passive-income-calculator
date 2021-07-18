export default function LockButton({ locked, onClick }) {
  const html = locked ?
    <button type="button" className="bg-red-400 text-white w-full text-center text-base font-semibold shadow-md rounded-lg ">Locked</button>
    :
    <button type="button" className="bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={onClick} >Lock</button>
    ;
  return html;
}
