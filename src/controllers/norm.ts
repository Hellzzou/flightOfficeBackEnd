import { Request, Response } from "express"
import Norme from "../models/norme"

export function deleteAllNorms(req: Request, res: Response): void {
	Norme.remove({})
		.then(() => {
			return res.status(200).json("deleted")
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function findNormWithName(req: Request, res: Response): void {
	const query = { name: req.body.name }
	Norme.find(query)
		.then((Norme) => {
			return res.status(200).json(Norme)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function getAllNorms(req: Request, res: Response): void {
	Norme.find({})
		.then((Norme) => {
			return res.status(200).json(Norme)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function createNorm(req: Request, res: Response): void {
	const norm = new Norme(req.body.norm)
	norm.save(function (err) {
		if (err) return res.status(400).json("Erreur de connexion !")
		else return res.status(200).json("success")
	})
}
