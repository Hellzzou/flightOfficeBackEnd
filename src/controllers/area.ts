import { Request, Response } from "express"
import Area from "../models/area"

export function findAllAreas(req: Request, res: Response): void {
	Area.find({})
		.then((Area) => {
			return res.status(200).json(Area)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function deleteAllAreas(req: Request, res: Response): void {
	Area.remove({})
		.then(() => {
			return res.status(200).json("deleted")
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function createAnArea(req: Request, res: Response): void {
	const area = new Area(req.body.area)
	area.save(function (err) {
		if (err) return res.status(400).json("Erreur de connexion !")
		else return res.status(200).json("success")
	})
}
