import { useAuth0 } from "@auth0/auth0-react"
import { useMutation } from "react-query"

const API_URL = import.meta.env.VITE_BASE_API_URL

type CreateUserRequest = {
  auth0Id: string,
  email: string
}

export const useUserCreate = () => {

  const { getAccessTokenSilently } = useAuth0()

  const createUser = async (user: CreateUserRequest) => {

    // accessToken restricts unauthorized access to the server
    const accessToken = await getAccessTokenSilently()

    const response = await fetch(`${API_URL}/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })

    if (!response.ok) {
      throw new Error("Can't create user!")
    }
  }

  const { mutateAsync, isLoading, isSuccess, isError } = useMutation(createUser)

  return {
    mutateAsync, isLoading, isSuccess, isError
  }
}