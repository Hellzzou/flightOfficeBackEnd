import { Request, Response } from "express"
import NewFlight from "../models/newflight"

export function createNewFlight(req: Request, res: Response): void {
	const flight = new NewFlight(req.body)
	flight.save(function (err) {
		if (err) return res.status(400).json("Erreur de connexion !")
		else return res.status(200).json("success")
	})
}
export function findNewFlightWithID(req: Request, res: Response): void {
	const query = { _id: req.body.id }
	NewFlight.findOne(query)
		.then((NewFlight) => {
			return res.status(200).json(NewFlight)
		})
		.catch(() => {
			return res.status(400).json({ error: "Vol non sauvegardé" })
		})
}
export function getAllNewFlights(req: Request, res: Response): void {
	NewFlight.find({})
		.then((NewFlight) => {
			return res.status(200).json(NewFlight)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function deleteNewFlightWithID(req: Request, res: Response): void {
	NewFlight.deleteOne({ _id: req.body.id })
		.then(() => {
			return res.status(200).json("success")
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
