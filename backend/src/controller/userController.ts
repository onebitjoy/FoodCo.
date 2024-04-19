import { Response, Request } from 'express'
import UserModel from '../model/User'

const createCurrentUser = async function (req: Request, res: Response) {
  try {
    const { auth0Id } = req.body
    const existingUser = await UserModel.findOne({ auth0Id })

    if (existingUser) {
      return res.status(200).send()
    }

    const newUser = new UserModel(req.body)
    await newUser.save()

    res.status(201).json(newUser.toObject())

  } catch (error) {
    console.log(error)
    res.send({ message: "Error: Can't create user!" })
  }
}

export default {
  createCurrentUser
}