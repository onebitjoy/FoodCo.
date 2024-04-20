import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken"
import UserModel from "../model/User";

// we have to declare this whenever we have to attach something to request

declare global {
  namespace Express {
    interface Request {
      auth0Id: string,
      userId: string
    }
  }
}

// this function validates the authenticity of the jwt token
export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});


// this function parses the jwt token, attach jwtCheck before it
export const jwtParser = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Unauthorized!" })
  }

  const token = authorization.split(" ")[1]

  try {
    const decodedToken = jwt.decode(token) as jwt.JwtPayload
    const auth0Id = decodedToken.sub

    const user = await UserModel.findOne({ auth0Id })

    if (!user) {
      res.sendStatus(401)
    }

    //attaching the auth0Id so that successive function has access to it
    req.auth0Id = auth0Id as string
    req.userId = user?._id.toString() as string

    next()

  } catch (error) {
    console.log(error)
    return res.status(401).send()
  }
}