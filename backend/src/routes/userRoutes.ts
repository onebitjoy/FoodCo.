import express from "express"
import userController from "../controller/userController"
import { jwtCheck, jwtParser } from "../middleware/auth"
import { validateUserRequest } from "../middleware/validation"

const userRouter = express.Router()

userRouter.post("/", jwtCheck, userController.createCurrentUser)
//validateUserRequest is an array of validation functions, which will run one by one, if there are errors,
// it will attach those errors onto req, which then will be internally checked by the handleValidationErrors
userRouter.put("/", jwtCheck, jwtParser, validateUserRequest, userController.updateCurrentUser)

export default userRouter