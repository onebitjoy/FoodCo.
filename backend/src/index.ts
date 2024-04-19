import express, { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import userRouter from "./routes/userRoutes"

// ----------------------------------------  Uncaught error handlers
// process.on('unhandledRejection', (err: Error) => {
//   console.log("Unhandled Rejection --", err.name, ":", err.message)
//   console.log(err);
//   server.close(
//     () => {
//       console.log("Exiting...");
//       process.exit(1)
//     }
//   )
// })

process.on('uncaughtException', (err) => {
  console.log("Uncaught Exception --", err.name, ":", err.message, "\nExiting...")
  process.exit(1)
})
// ----------------------------------------

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {
    console.log("Connected to DB!")
  })
  .catch((error) => {
    console.error(error)
  })

const app = express()
app.use(express.json())
app.use(cors())


// Routes
app.use("/user", userRouter)

app.listen(3000, () => {
  console.log("App running on port 3000!");
})