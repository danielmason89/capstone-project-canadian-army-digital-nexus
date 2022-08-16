import "../styles/global-styles.css"
import 'normalize.css';
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
import { ChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react"
import Layout from "../components/layout"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac"
  },
}

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}


const theme = extendTheme({ colors, breakpoints, config });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider resetCss theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
