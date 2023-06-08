import AddNew from "@/components/addNew";
import Site from "@/components/site";
import { useSites } from "@/hooks/useSites";

export default function Sites() {
  const { sites } = useSites();
  return (
    <main className="min-h-screen text-gray-900 transition-all bg-slate-100 dark:bg-gray-900 dark:text-white">
      <section className="absolute grid w-full gap-12 px-8 mt-8 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2">
        {sites.map(({ title, url }) => (
          <Site key={title} title={title} url={url} />
        ))}
      </section>
      <AddNew type="site" />
    </main>
  );
}
