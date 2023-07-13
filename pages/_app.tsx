import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '@/components/layout'
import { ApolloProvider } from '@apollo/client/react'
import client from '../lib/apollo'

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <ApolloProvider client={client}>
    <Layout>
         <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
  )
 
}