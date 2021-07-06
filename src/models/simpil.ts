import { Schema, model } from "mongoose"

const simpilSchema = new Schema({
	effectiveDeparture: { type: Date, required: true },
	mission: { type: String, required: true },
	dayDuration: { type: Number, required: true },
	nightDuration: { type: Number, required: true },
	totalDuration: { type: Number, required: true },
	flightPilots: [
		{
			pilotName: { type: String, required: true },
			pilotDay: { type: Number, required: true },
			pilotNight: { type: Number, required: true },
		},
	],
})

export default model("simpils", simpilSchema)
