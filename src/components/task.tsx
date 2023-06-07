import { useState } from "react";
import CheckBox from "./checkBox";
import TaskLabel from "./taskLabel";
import { motion } from "framer-motion";

interface TaskProps {
  task: { title: string; done: boolean };
}

export default function Task({ task }: TaskProps) {
  function handleDragEnd(event: any, info: any) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
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
        <span>
          <CheckBox isDone={task.done} />
        </span>
        <TaskLabel isDone={task.done}>{task.title}</TaskLabel>
      </motion.span>
    </motion.span>
  );
}
