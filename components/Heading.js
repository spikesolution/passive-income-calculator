export default function Heading({ text }) {
  return (
    <div className="bg-white dark:bg-gray-800 ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span className="block">{text}</span>
            </h2>
        </div>
    </div>
  );
}
