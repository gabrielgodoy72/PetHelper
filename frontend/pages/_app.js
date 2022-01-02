import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head"

const App = ({ Component, pageProps }) => {
  return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default App;
