import { Request, Response } from "express"
import ValidatedFlight from "../models/validatedflight"

export function createAValidatedFlight(req: Request, res: Response): void {
	const flight = new ValidatedFlight(req.body.flight)
	flight.save(function (err) {
		if (err) return res.status(400).json("Erreur de connexion !")
		else return res.status(200).json("success")
	})
}
export function findOneValidatedFlight(req: Request, res: Response): void {
	const query = { _id: req.body.id }
	ValidatedFlight.findOne(query)
		.then((NewFlight) => {
			return res.status(200).json(NewFlight)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function deleteOneValidatedFlight(req: Request, res: Response): void {
	ValidatedFlight.deleteOne({ _id: req.body.id })
		.then(() => {
			return res.status(200).json("success")
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function findValidateFlightsBetweenThisDates(
	req: Request,
	res: Response
): void {
	const query = {
		effectiveDeparture: { $gt: req.body.startDate, $lt: req.body.endDate },
	}
	ValidatedFlight.find(query)
		.then((ValidatedFlight) => {
			return res.status(200).json(ValidatedFlight)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
