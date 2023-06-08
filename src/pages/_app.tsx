import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { TasksProvider } from "@/hooks/useTasks";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TasksProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TasksProvider>
  );
}
