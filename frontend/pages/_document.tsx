import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full" lang="en">
      <Head />
      {/* <body> */}
      {/* <body className="flex flex-col bg-zinc-50"> */}
      <body className="h-full">
        <div>
          {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
          {/* <div className="mx-auto max-w-3xl"> */}
          <Main />
          <NextScript />
          {/* </div> */}
        </div>
      </body>
    </Html>
  );
}
