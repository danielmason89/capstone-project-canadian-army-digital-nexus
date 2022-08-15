import "../styles/globals.css";
import 'normalize.css';
import type { AppProps } from "next/app";
// import { Container } from 'react-bootstrap';
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Layout from "../components/layout"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac"
  },
}

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>

      <ChakraProvider resetCss theme={theme}>
        {/* <Container className="main-content"> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </Container> */}
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
