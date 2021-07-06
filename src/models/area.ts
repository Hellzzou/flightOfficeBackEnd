import { Schema, model } from "mongoose"

const areaSchema = new Schema({
	name: { type: String, required: true },
})

export default model("areas", areaSchema)
