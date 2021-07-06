import { Request, Response } from "express"
import Simpil from "../models/simpil"

export function createSimpil(req: Request, res: Response): void {
	const simpil = new Simpil(req.body)
	simpil.save(function (err) {
		if (err) return res.status(400).json("Erreur de connexion !")
		else return res.status(200).json("success")
	})
}
export function getSimpilsBetweenTwodates(req: Request, res: Response): void {
	const query = {
		effectiveDeparture: { $gt: req.body.startDate, $lt: req.body.endDate },
	}
	Simpil.find(query)
		.then((Simpil) => {
			return res.status(200).json(Simpil)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
