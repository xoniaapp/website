import Head from "next/head";

import { Navbar, Header, Feature, Content, Footer } from "../components/export";

export default function Home() {
  return (
    <div>
      <Head>
        <title>End to End Encrypted Chat for everyone by Xonia</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="keywords" content="xoniaapp.com, xoniaapp" />
        <meta
          name="title"
          content="End to End Encrypted Chat for everyone by Xonia"
        />
        <meta
          name="description"
          content="Xonia | End to End Encrypted Chat for everyone"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xoniaapp.com/" />
        <meta
          property="og:title"
          content="End to End Encrypted Chat for everyone by Xonia"
        />
        <meta
          property="og:description"
          content="Xonia | End to End Encrypted Chat for everyone"
        />
        <meta
          property="og:image"
          content="https://cdn.xoniaapp.com/static/logo.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://xoniaapp.com/" />
        <meta
          property="twitter:title"
          content="End to End Encrypted Chat for everyone by Xonia"
        />
        <meta
          property="twitter:description"
          content="Xonia | End to End Encrypted Chat for everyone"
        />
        <meta
          property="twitter:image"
          content="https://cdn.xoniaapp.com/static/logo.png"
        />
        <title>Xonia | End to End Encrypted Chat for everyone</title>
        <link rel="shortcut icon" href="./logo.png" type="image/x-icon" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://cdn.xoniaapp.com/static/logo.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://cdn.xoniaapp.com/static/logo.png"
        />
        <link rel="manifest" href="./manifest.json" />
      </Head>
      <section className="container__body">
        <Navbar />
        <Header />
        <Feature />
        <Content />
        <Footer />
      </section>
    </div>
  );
}
