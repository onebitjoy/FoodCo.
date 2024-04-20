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

const updateCurrentUser = async function (req: Request, res: Response) {
  try {
    const { name, address, country, city } = req.body // form data
    // req.userId is available due to preceeding middleware
    const user = await UserModel.findById(req.userId)

    if (!user) {
      return res.status(404).json({ message: "User doesn't exists! Error updating." })
    }

    user.name = name
    user.address = address
    user.country = country
    user.city = city

    await user.save()

    res.json(user)

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Can't update user!" })
  }
}

export default {
  createCurrentUser,
  updateCurrentUser
}