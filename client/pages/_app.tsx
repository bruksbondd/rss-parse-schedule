import "src/styles/globals.css";
// Core
import "primereact/resources/primereact.min.css";
// Icons
import "primeicons/primeicons.css";
// Flexbox
import "primeflex/primeflex.css";
// Theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "src/app/store";
import PrimeReact from "primereact/api";

PrimeReact.ripple = true;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
