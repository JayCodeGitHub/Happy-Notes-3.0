export default function About() {
  return (
    <main className="absolute flex flex-col items-center justify-start w-full h-screen gap-5 transition-all bg-slate-100 dark:bg-gray-900">
      <section className="px-4 mx-auto mt-16 md:px-0 md:w-1/2">
        <h1 className="mb-12 text-3xl text-gray-900 transition-all dark:text-white">
          About
        </h1>
        <p className="text-gray-600 transition-all text-md md:text-xl dark:text-gray-400">
          To-do list app designed for productivity enthusiasts. With seamless
          functionality, this application allows users to effortlessly create
          and manage their tasks. To delete an item, simply swipe right across
          the screen. Built with TypeScript, Framer Motion and PWA, this app is
          perfect for practicing your skills while staying organized.
        </p>
      </section>
    </main>
  );
}
