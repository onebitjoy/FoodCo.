import { useUserCreate } from "@/hooks/useUserCreate";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// creating a user in db, this function runs after auth has taken place
export default function AuthCallback() {

  //The reason this page exists is that we need access token to be present
  const navigate = useNavigate()
  const { user } = useAuth0()
  const { mutateAsync } = useUserCreate()

  // so that user is not always created
  const userAlreadyCreated = useRef(false)

  useEffect(() => {
    if (user?.sub && user?.email && !userAlreadyCreated.current) {
      mutateAsync({ auth0Id: user.sub, email: user.email })
      userAlreadyCreated.current = true
    }

    navigate("/")
  }, [mutateAsync, user, navigate])

  return <>Loading...</>
}
