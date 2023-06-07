import AddNew from "@/components/addNew";
import Site from "@/components/site";

export default function Sites() {
  return (
    <main className="min-h-screen text-gray-900 transition-all bg-slate-100 dark:bg-gray-900 dark:text-white">
      <section className="absolute grid w-full gap-12 px-8 mt-8 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2">
        <Site />
        <Site />
        <Site />
      </section>
      <AddNew type="site" />
    </main>
  );
}
