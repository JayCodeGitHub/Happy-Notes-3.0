import { useState } from "react";
import { motion } from "framer-motion";
import { useTasks } from "@/hooks/useTasks";
import { useNotes } from "@/hooks/useNotes";

interface FormProps {
  type: string;
}

export default function Form({ type }: FormProps) {
  const { addTask } = useTasks();
  const { addNote } = useNotes();
  const [form, setForm] = useState({
    title: "",
    body: "",
    url: "",
  });

  const updateField = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("form submited", form);
    if (type === "todo") {
      addTask(form.title);
    } else if (type === "note") {
      addNote(form.title, form.body);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.2 } }}
      className="absolute text-gray-900 -translate-x-1/2 -translate-y-1/2 bg-white md:w-[35vw] w-10/12 rounded-2xl md:top-[40%] top-56 left-1/2 flex flex-col px-4 py-4 drop-shadow-lg z-30"
    >
      <label className="mb-1 ml-2">title</label>
      <input
        type="text"
        name="title"
        onChange={updateField}
        className="p-1 bg-transparent border-2 border-gray-900 rounded-md"
      />
      {type === "note" ? (
        <>
          <label className="mt-4 mb-1 ml-2">note</label>
          <textarea
            name="body"
            rows={10}
            onChange={updateField}
            className="p-1 bg-transparent border-2 border-gray-900 rounded-md"
          />
        </>
      ) : type === "site" ? (
        <>
          <label className="mt-4 mb-1 ml-2">url</label>
          <input
            name="url"
            type="text"
            onChange={updateField}
            className="p-1 bg-transparent border-2 border-gray-900 rounded-md"
          />
        </>
      ) : null}
      <span className="mt-4 ">
        <button
          className="px-4 py-2 ml-1 text-white transition-all bg-green-500 rounded-md hover:bg-green-600"
          type="submit"
        >
          Save
        </button>
        <button className="px-4 py-2 ml-4 transition-all border-2 border-gray-900 rounded-md hover:border-gray-500 hover:text-gray-500">
          Cancel
        </button>
      </span>
    </motion.form>
  );
}
