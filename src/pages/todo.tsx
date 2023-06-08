import AddNew from "@/components/addNew";
import Task from "@/components/task";
import { TodoItems } from "@/assets/todoItems";

export default function ToDo() {
  return (
    <main className="absolute flex flex-col items-center justify-start w-full h-screen gap-5 py-16 transition-all bg-slate-100 dark:bg-gray-900">
      <section className="flex flex-col items-start w-full mt-5 md:w-60 px-14 md:px-0">
        {TodoItems.map((item) => (
          <Task task={item} key={item.title} />
        ))}
      </section>
      <AddNew type="todo" />
    </main>
  );
}
