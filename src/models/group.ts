import { Schema, model } from "mongoose"

const groupSchema = new Schema({
	group: { type: Number, required: true },
	underGroup: { type: String, required: true },
	mission: { type: String, required: true },
	context: [{ type: String, required: false }],
	client: { type: String, required: true },
	manager: { type: String, required: true },
	allocation: { type: Number, required: true },
})

export default model("groups", groupSchema)
