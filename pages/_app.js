import * as React from "react"
import Layout from '../components/Layout'
import '../styles/globals.css'
import { ChakraProvider ,extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools";
function MyApp({ Component, pageProps }) {
  const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  });
  const colors = {
    brand: {
      900: "#ED64A6",
      800: "#ED64A6",
      700: "#ED64A6",
    },
  }
  const theme = extendTheme({ colors,breakpoints })
  return (
    <Layout>
       <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  )
}

export default MyApp
