import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "@/state";

interface FormProps {
  type: string;
  setVisible: (state: boolean) => void;
}

export default function Form({ type, setVisible }: FormProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const { addItem } = bindActionCreators(actionCreators, dispatch);
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
    addItem(type, form.title, form.body);
    setVisible(false);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
        ref={inputRef}
        type="text"
        name="title"
        onChange={updateField}
        className="p-1 bg-transparent border-2 border-gray-900 rounded-md"
      />
      {type === "notes" ? (
        <>
          <label className="mt-4 mb-1 ml-2">note</label>
          <textarea
            name="body"
            rows={10}
            onChange={updateField}
            className="p-1 bg-transparent border-2 border-gray-900 rounded-md"
          />
        </>
      ) : type === "sites" ? (
        <>
          <label className="mt-4 mb-1 ml-2">url</label>
          <input
            name="body"
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
        <button
          onClick={() => setVisible(false)}
          className="px-4 py-2 ml-4 transition-all border-2 border-gray-900 rounded-md hover:border-gray-500 hover:text-gray-500"
        >
          Cancel
        </button>
      </span>
    </motion.form>
  );
}
