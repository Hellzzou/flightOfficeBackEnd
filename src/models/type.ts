import { Schema, model } from "mongoose"

const typeSchema = new Schema({
	name: { type: String, required: true },
})

export default model("types", typeSchema)
