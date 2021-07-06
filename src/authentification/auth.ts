import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"
import User from "../models/user"
import { routeAccess } from "./authAccess"

export default (req: Request, res: Response, next: NextFunction): void  => {
	try {
		let token = ""
		if (req.headers.authorization !== undefined)
			token = req.headers.authorization.split(" ")[1]
		const decodedToken: any = verify(token, "FLIGHT_OFFICE_TOKEN_ACCESS_SECRET")
		const userID = decodedToken.userID
		User.findOne({ _id: userID })
			.then((user: any) => {
				const access: any = routeAccess.get(req.originalUrl)
				if (user.access < access)
					return res.status(401).json({
						error: "Vous n'êtes pas autorisé à faire cette requète",
					})
				else return next()
			})
			.catch(() => {
				return res
					.status(401)
					.json({ error: "Aucun utilisateur avec ce token" })
			})
	} catch (error) {
		res.status(401).json({ error: "Vous n'êtes pas authentifié" })
	}
}
