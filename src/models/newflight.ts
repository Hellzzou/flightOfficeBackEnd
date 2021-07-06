import { Schema, model } from "mongoose"

const newflightSchema = new Schema({
	estimatedDeparture: { type: Date, required: true },
	effectiveDeparture: { type: Date, required: true },
	dayDuration: { type: Number, required: true },
	nightDuration: { type: Number, required: true },
	totalDuration: { type: Number, required: true },
	belonging: { type: String, required: true },
	mission: { type: String, required: true },
	flightType: { type: String, required: true },
	aircraft: { type: Number, required: true },
	crew: { type: String, required: true },
	durationType: [
		{
			name: { type: String, required: true },
			day: { type: Number, required: true },
			night: { type: Number, required: true },
		},
	],
	flightPilots: [
		{
			pilotName: { type: String, required: true },
			pilotDay: { type: Number, required: true },
			pilotNight: { type: Number, required: true },
		},
	],
})

export default model("newflights", newflightSchema)
