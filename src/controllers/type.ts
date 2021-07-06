import { Request, Response } from "express"
import Type from "../models/type"

export function getAllTypes(req: Request, res: Response): void {
	Type.find({})
		.then((Type: any) => {
			return res.status(200).json(Type)
		})
		.catch((error: any) => {
			return res.status(400).json({ error })
		})
}
export function deleteAllTypes(req: Request, res: Response): void {
	Type.remove({})
		.then(() => {
			return res.status(200).json("deleted")
		})
		.catch((error: any) => {
			return res.status(400).json({ error })
		})
}
export function crateAtype(req: Request, res: Response): void {
	const type = new Type(req.body.type)
	type.save(function (err: any) {
		if (err) return res.status(400).json("Erreur de connexion !")
		else return res.status(200).json("success")
	})
}
