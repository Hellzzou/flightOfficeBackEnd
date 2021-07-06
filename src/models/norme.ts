import mongoose from "mongoose"

const normeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	hoursToDo: { type: Number, required: true },
	nightToDo: { type: Number, required: true },
	duration: { type: Number, required: true },
})

export default mongoose.model("normes", normeSchema)
