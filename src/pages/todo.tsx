import AddNew from "@/components/addNew";
import Task from "@/components/task";

export default function ToDo() {
  const task = { title: "test", done: false };
  return (
    <main className="min-h-screen text-gray-900 transition-all bg-slate-100 dark:bg-gray-900 dark:text-white">
      <Task task={task} />

      <AddNew />
    </main>
  );
}
