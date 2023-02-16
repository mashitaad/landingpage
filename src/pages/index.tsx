import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
        title= 'lorem'
      />
    </div>
  );
}
