import AddNew from "@/components/addNew";
import Note from "@/components/note";

export default function Notes() {
  return (
    <main className="min-h-screen text-gray-900 transition-all bg-slate-100 dark:bg-gray-900 dark:text-white">
      <Note />
      <AddNew type="note" />
    </main>
  );
}
