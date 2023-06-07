export default function Form() {
  return (
    <form className="absolute text-gray-900 -translate-x-1/2 -translate-y-1/2 bg-white w-[35vw] rounded-2xl top-[40%] left-1/2 flex flex-col px-4 py-4 drop-shadow-lg z-30">
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
        <button className="px-4 py-2 ml-1 border-2 border-gray-900 rounded-md">
          Submit
        </button>
        <button className="px-4 py-2 ml-4 border-2 border-gray-900 rounded-md">
          Cancel
        </button>
      </span>
    </form>
  );
}
