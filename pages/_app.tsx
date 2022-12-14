import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavigationContextProvider } from "../public/context/navigationContext";
import theme from "../styles/theme";
import { store } from "../public/redux/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavigationContextProvider>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </NavigationContextProvider>
  );
}
