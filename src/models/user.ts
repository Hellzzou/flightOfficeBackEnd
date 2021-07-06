import { Schema, model } from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const userSchema = new Schema({
	login: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	rank: { type: String, required: true },
	name: { type: String, required: true },
	responsability: { type: String, required: true },
	access: { type: Number, required: true },
})

userSchema.plugin(uniqueValidator)
export default model("users", userSchema)
