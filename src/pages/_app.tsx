import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { Provider } from "react-redux";
import store from "@/state/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Happy Notes</title>
        <meta
          name="description"
          content="Happy Notes is a feature-rich note-taking application built with Next.js, React, Framer Motion, Tailwind CSS, and Redux. 
          It offers a user-friendly interface for creating and organizing three different types of notes. With local storage integration, 
          your notes are securely stored on the user's device. Seamlessly designed with an intuitive layout, Happy Notes enhances productivity and streamlines your note-taking experience. 
          Whether it's personal memos, brainstorming sessions, or task lists, this app is a perfect companion for organizing your thoughts and staying productive."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
