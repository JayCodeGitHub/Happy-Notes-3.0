import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "@/state";
import { motion } from "framer-motion";

interface SiteProps {
  title: string;
  url: string;
}

export default function Site({ title, url }: SiteProps) {
  const dispatch = useDispatch();
  const { removeItem } = bindActionCreators(actionCreators, dispatch);
  return (
    <motion.div
      className="p-2 overflow-hidden text-center transition-colors rounded-md dark:bg-gray-700 bg-slate-200"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <h1 className="text-xl text-gray-900 transition-colors dark:text-white">
        {title}
      </h1>
      <span className="flex justify-around w-full mt-2">
        <a href={url} target="_blank">
          <button className="px-4 py-2 ml-1 text-white transition-colors bg-green-500 rounded-full hover:bg-green-600">
            Go to site
          </button>
        </a>
        <button
          onClick={() => removeItem(title, "site")}
          className="px-4 py-2 ml-1 text-white transition-colors bg-gray-400 rounded-full hover:bg-gray-500"
        >
          Remove
        </button>
      </span>
    </motion.div>
  );
}
