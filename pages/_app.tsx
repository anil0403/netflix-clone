import "@/styles/globals.css";
import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
);

export default App;
