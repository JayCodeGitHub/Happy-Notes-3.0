export default function Site() {
  return (
    <div className="overflow-hidden bg-gray-700 rounded-md">
      <button className="px-4 py-2 ml-1 text-white transition-all bg-green-500 rounded-full hover:bg-green-600">
        Go to site
      </button>
      <button className="px-4 py-2 ml-1 text-white transition-all bg-gray-400 rounded-full hover:bg-gray-500">
        Remove
      </button>
      <h1>Site</h1>
    </div>
  );
}
