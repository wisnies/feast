import dotenv from 'dotenv-safe';
import { Html, Head, Main, NextScript } from 'next/document';

dotenv.config();

const Document = () => {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
