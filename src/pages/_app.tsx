import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { Provider } from "react-redux";
import store from "@/state/store";
import { TasksProvider } from "@/hooks/useTasks";
import { NotesProvider } from "@/hooks/useNotes";
import { SitesProvider } from "@/hooks/useSites";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SitesProvider>
        <NotesProvider>
          <TasksProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </TasksProvider>
        </NotesProvider>
      </SitesProvider>
    </Provider>
  );
}
