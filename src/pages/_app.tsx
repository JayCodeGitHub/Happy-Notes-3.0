import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { TasksProvider } from "@/hooks/useTasks";
import { NotesProvider } from "@/hooks/useNotes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotesProvider>
      <TasksProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TasksProvider>
    </NotesProvider>
  );
}
