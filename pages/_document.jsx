
import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document'
  
  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }
  
    render() {
      return (
        <Html>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"/> 
          <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet"/> 
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap" rel="stylesheet"/> 
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/> 
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"/> 
          <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/> 
          <link href="https://fonts.googleapis.com/css2?family=Cormorant&display=swap" rel="stylesheet"/> 





          
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument