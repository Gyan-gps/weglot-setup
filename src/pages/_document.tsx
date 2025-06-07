import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.gtranslateSettings = {"default_language":"en","languages":["en","fr","it","es","ja","ko"],"wrapper_selector":".gtranslate_wrapper"}`
          }}
        />
        <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>
      </Head>
      <body className="antialiased">
        <div className="gtranslate_wrapper"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
