
import { Auth0Provider } from "@auth0/auth0-react";

// Global Next Styles

import '../styles/global.css'


export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH_0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH_0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_AUTH_0_REDIRECT_URL}>
      <Component {...pageProps} />
    </Auth0Provider>
  )
}