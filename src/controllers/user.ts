import { Request, Response } from "express"
import User from "../models/user"
import Bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export function signup(req: Request, res: Response): void {
	Bcrypt.hash(req.body.password, 10)
		.then((hash: any) => {
			const user = new User({
				rank: req.body.rank,
				name: req.body.name,
				login: req.body.login,
				password: hash,
				responsability: req.body.responsability,
				access: req.body.access,
			})
			user
				.save()
				.then(() => {
					return res.status(201).json("Utilisateur crée")
				})
				.catch((error: any) => {
					return res.status(400).json({ error })
				})
		})
		.catch((error: any) => {
			return res.status(500).json({ error })
		})
}
export function login(req: Request, res: Response): void {
	const query = { login: req.body.login }
	console.log(req.body)
	User.findOne(query)
		.then((user: any): void => {
			if (!user) res.status(401).json({ error: "Utilisateur innconnu" })
			Bcrypt.compare(req.body.password, user.password)
				.then((valid) => {
					if (!valid)
						return res.status(401).json({ error: "Mot de passe incorrect" })
					return res.status(200).json({
						rank: user.rank,
						name: user.name,
						token: jwt.sign(
							{ userID: user._id },
							"FLIGHT_OFFICE_TOKEN_ACCESS_SECRET",
							{ expiresIn: "1h" }
						),
					})
				})
				.catch((error) => {
					return res.status(500).json({ error })
				})
		})
		.catch((error: any) => {
			return res.status(500).json({ error })
		})
}
export function getAllUsers(req: Request, res: Response): void {
	User.find({})
		.then((User: any) => {
			return res.status(200).json(User)
		})
		.catch((error: any) => {
			return res.status(400).json({ error })
		})
}
export function getAUser(req: Request, res: Response): void {
	try {
		let token = ""
		if (req.headers.authorization !== undefined)
			token = req.headers.authorization.split(" ")[1]
		const decodedToken: any = jwt.verify(
			token,
			"FLIGHT_OFFICE_TOKEN_ACCESS_SECRET"
		)
		const query = { _id: decodedToken.userID }
		User.findOne(query)
			.then((User: any) => {
				return res.status(200).json(User)
			})
			.catch((error: any) => {
				return res.status(500).json({ error })
			})
	} catch (error) {
		res.status(401).json({ error })
	}
}
export function deleteOneUser(req: Request, res: Response): void {
	const query = { name: req.body.name }
	User.deleteOne(query)
		.then(() => {
			return res.status(200).json("success")
		})
		.catch((error: any) => {
			return res.status(400).json({ error })
		})
}
export function getUsersByFunction(req: Request, res: Response): void {
	const query = { responsability: req.body.responsability }
	User.find(query)
		.then((User: any) => {
			return res.status(200).json(User)
		})
		.catch((error: any) => {
			return res.status(400).json({ error })
		})
}
