export default function Form() {
  return (
    <form className="absolute text-gray-900 -translate-x-1/2 -translate-y-1/2 bg-white md:w-[35vw] w-10/12 rounded-2xl md:top-[40%] top-56 left-1/2 flex flex-col px-4 py-4 drop-shadow-lg z-30">
      <label className="mb-1 ml-2">title</label>
      <input
        type="text"
        className="p-1 bg-transparent border-2 border-gray-900 rounded-md"
      />
      <label className="mt-4 mb-1 ml-2">note</label>
      <textarea
        rows={10}
        className="p-1 bg-transparent border-2 border-gray-900 rounded-md"
      />
      <span className="mt-4 ">
        <button className="px-4 py-2 ml-1 text-white transition-all bg-green-500 rounded-md hover:bg-green-600">
          Save
        </button>
        <button className="px-4 py-2 ml-4 transition-all border-2 border-gray-900 rounded-md hover:border-gray-500 hover:text-gray-500">
          Cancel
        </button>
      </span>
    </form>
  );
}
