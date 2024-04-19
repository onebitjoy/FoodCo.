import { useMutation } from "react-query"

const API_URL = import.meta.env.VITE_BASE_API_URL

type CreateUserRequest = {
  auth0Id: string,
  email: string
}

export const useUserCreate = () => {

  const createUser = async (user: CreateUserRequest) => {
    const response = await fetch(`${API_URL}/user`, {
      method: "POST",
      headers: {
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