import AddNew from "@/components/addNew";
import Task from "@/components/task";

export default function ToDo() {
  const task = { title: "test", done: false };
  return (
    <main className="absolute flex flex-col items-center justify-start w-full h-screen gap-5 py-16 transition-all bg-slate-100 dark:bg-gray-900">
      <section className="flex flex-col items-start w-full mt-5 md:w-60 px-14 md:px-0">
        <Task task={task} />
      </section>
      <AddNew />
    </main>
  );
}
