//Next JS imports
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next JS-Near Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-div">
        <span>This is a Near Api template for Next JS</span>
        <span>
          Do NOT forget to change the contract account in the near-setup.js file
        </span>
      </div>
    </div>
  );
}