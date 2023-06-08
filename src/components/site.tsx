export default function Site() {
  return (
    <div className="p-2 overflow-hidden text-center bg-gray-700 rounded-md">
      <h1 className="text-xl text-white">Site Name</h1>
      <span className="flex justify-around w-full mt-2">
        <button className="px-4 py-2 ml-1 text-white transition-all bg-green-500 rounded-full hover:bg-green-600">
          Go to site
        </button>
        <button className="px-4 py-2 ml-1 text-white transition-all bg-gray-400 rounded-full hover:bg-gray-500">
          Remove
        </button>
      </span>
    </div>
  );
}
