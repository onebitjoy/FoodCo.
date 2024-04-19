import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  name: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  }
},
  { timestamps: true }
)

const UserModel = mongoose.model("User", userSchema)
export default UserModel