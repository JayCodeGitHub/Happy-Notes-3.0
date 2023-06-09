import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "@/state";
import { motion } from "framer-motion";
import CheckBox from "./checkBox";
import TaskLabel from "./taskLabel";

interface TaskProps {
  task: { title: string; body: string };
}

export default function Task({ task }: TaskProps) {
  const dispatch = useDispatch();
  const { removeItem, setStatus } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function handleDragEnd(event: any, info: any) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || offset > 50 || velocity < -50) {
      removeItem(task.title, "todo");
    }
  }
  return (
    <motion.span
      className="relative flex items-center justify-between w-48 h-8 pl-4 my-3 overflow-hidden cursor-grab"
      layout
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <motion.span className="flex items-center">
        <span onClick={() => setStatus(task.title, "todo")}>
          <CheckBox isDone={task.body} />
        </span>
        <TaskLabel isDone={task.body}>{task.title}</TaskLabel>
      </motion.span>
    </motion.span>
  );
}
