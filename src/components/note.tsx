import { useNotes } from "@/hooks/useNotes";
import { motion } from "framer-motion";

interface NoteProps {
  title: string;
  body: string;
}

export default function Note({ title, body }: NoteProps) {
  const { removeNote } = useNotes();
  return (
    <motion.div
      className="overflow-hidden bg-gray-700 rounded-md h-96"
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <div className="flex items-center justify-between h-16 px-4 bg-green-500">
        <h1 className="text-lg text-white truncate">{title}</h1>
        <button
          className="px-4 py-2 ml-1 text-white transition-all bg-gray-700 rounded-full hover:bg-gray-500"
          onClick={() => removeNote(title)}
        >
          Remove
        </button>
      </div>
      <p className="m-4 overflow-hidden text-base text-white h-72">{body}</p>
    </motion.div>
  );
}
