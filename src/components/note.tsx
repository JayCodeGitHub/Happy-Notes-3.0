import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "@/state";
import { motion } from "framer-motion";

interface NoteProps {
  title: string;
  body: string;
}

export default function Note({ title, body }: NoteProps) {
  const dispatch = useDispatch();
  const { removeItem } = bindActionCreators(actionCreators, dispatch);
  return (
    <motion.div
      className="overflow-hidden transition-colors rounded-md dark:bg-gray-700 bg-slate-200 h-96"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <div className="flex items-center justify-between h-16 px-4 bg-green-500">
        <h1 className="text-lg text-white truncate">{title}</h1>
        <button
          className="px-4 py-2 ml-1 text-gray-900 transition-colors rounded-full dark:text-white dark:bg-gray-700 bg-slate-200 dark:hover:bg-gray-500 hover:bg-slate-300"
          onClick={() => removeItem(title, "notes")}
        >
          Remove
        </button>
      </div>
      <p className="m-4 overflow-hidden text-base text-gray-900 transition-colors dark:text-white h-72">
        {body}
      </p>
    </motion.div>
  );
}
