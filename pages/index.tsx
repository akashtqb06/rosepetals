import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Rosepetals | Education and Research Foundation</title>
      <link rel="shortcut icon" href="/favicon.ico"></link>
      <meta name="description" content="RosePetals Education and Research is dedicated to unlocking the inherent talents of our local community, igniting a path of growth and impact. Together, we're shaping a future where empowerment paves the way for collective success."/>
    </Head>
    <main className="bg-gray-900 h-screen">
      <Hero/>
      <Footer/>
    </main>
    </>
  );
}
