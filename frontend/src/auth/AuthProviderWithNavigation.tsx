import { Auth0Provider } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"

type Props = {
  children: React.ReactNode
}

function AuthProviderWithNavigation({ children }: Props) {
  const navigate = useNavigate()
  // vars
  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clientId = import.meta.env.VITE_AUTH0_CLIENTID
  const redirectURI = import.meta.env.VITE_AUTH0_CALLBACK_URL
  const audience = import.meta.env.VITE_AUTH0_AUDIENCEIO, G
  J

  if (!domain || !clientId || !redirectURI || !audience) {
    throw new Error("Unable to initialise authentication!")
  }

  async function onredirect() {
    // this function just redirects us to auth-page to create a user
    navigate("/auth-page")
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectURI,
        audience
      }}
      onRedirectCallback={onredirect}
    >
      {children}
    </Auth0Provider>
  )
}


export default AuthProviderWithNavigation
