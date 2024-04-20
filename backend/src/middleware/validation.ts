import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async function (req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() })
  }

  next()
}
export const validateUserRequest = [
  body("name").isString().notEmpty().withMessage("name must be a string"),
  body("address").isString().notEmpty().withMessage("address must be a string"),
  body("city").isString().notEmpty().withMessage("city must be a string"),
  body("country").isString().notEmpty().withMessage("country must be a string"),
  handleValidationErrors
]

