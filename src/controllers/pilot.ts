import { Request, Response } from "express"
import Pilot from "../models/pilot"

export function getAllPilots(req: Request, res: Response): void {
	Pilot.find({})
		.then((Pilot) => {
			return res.status(200).json(Pilot)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function deleteAllPilots(req: Request, res: Response): void {
	Pilot.remove({})
		.then(() => {
			return res.status(200).json("deleted")
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function getAllPilotsFrom23F(req: Request, res: Response): void {
	const query = { belonging: req.body.belonging }
	Pilot.find(query)
		.then((Pilot) => {
			return res.status(200).json(Pilot)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function createPilot(req: Request, res: Response): void {
	const pilot = new Pilot(req.body.pilot)
	pilot.save(function (err) {
		if (err) return res.status(400).json("Erreur de connexion !")
		else return res.status(200).json("success")
	})
}
export function getPilotByName(req: Request, res: Response): void {
	const query = { name: req.body.name }
	Pilot.find(query)
		.then((Pilot) => {
			return res.status(200).json(Pilot)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
