import { Schema, model } from "mongoose"

const pilotSchema = new Schema({
	name: { type: String, required: true },
	norme: { type: String, required: true },
	belonging: { type: String, required: true },
	crew: { type: String, required: true },
})

export default model("pilots", pilotSchema)
