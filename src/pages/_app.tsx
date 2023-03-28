import { Layout } from "@/components/Layout/Layout"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Odin Front-end Tech Test</title>
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ChakraProvider>
    </>
  )
}
