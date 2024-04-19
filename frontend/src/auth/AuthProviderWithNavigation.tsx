import { useUserCreate } from "@/hooks/useUserCreate"
import { AppState, Auth0Provider, User } from "@auth0/auth0-react"

type Props = {
  children: React.ReactNode
}

function AuthProviderWithNavigation({ children }: Props) {
  const { mutateAsync } = useUserCreate()

  // vars
  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clientId = import.meta.env.VITE_AUTH0_CLIENTID
  const redirectURI = import.meta.env.VITE_AUTH0_CALLBACK_URL

  if (!domain || !clientId || !redirectURI) {
    throw new Error("Unable to initialise authentication!")
  }

  // creating a user in db, this function runs after auth has taken place
  async function onredirect(appState?: AppState, user?: User) {
    if (user?.sub && user?.email) {
      await mutateAsync({ auth0Id: user.sub, email: user.email })
    }
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectURI }}
      onRedirectCallback={onredirect}
    >
      {children}
    </Auth0Provider>
  )
}


export default AuthProviderWithNavigation
