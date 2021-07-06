import { Request, Response } from "express"
import Group from "../models/group"

export function findClientFromUnderGroupAndManager(
	req: Request,
	res: Response
): void {
	const query = { underGroup: req.body.underGroup, manager: req.body.manager }
	Group.find(query)
		.then((Group) => {
			return res.status(200).json(Group)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function findManagerFromUnderGroupAndClient(
	req: Request,
	res: Response
): void {
	const query = { underGroup: req.body.underGroup, client: req.body.client }
	Group.find(query)
		.then((Group) => {
			return res.status(200).json(Group)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function findGroupsWithUnderGroup(req: Request, res: Response): void {
	const query = { underGroup: req.body.underGroup }
	Group.find(query)
		.then((Group) => {
			return res.status(200).json(Group)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function findGroupsWithGroup(req: Request, res: Response): void {
	const query = { group: req.body.group }
	Group.find(query)
		.then((Group) => {
			return res.status(200).json(Group)
		})
		.catch((error) => {
			return res.status(400).json({ error })
		})
}
export function createGroup(req: Request, res: Response): void {
	const group = new Group(req.body.group)
	group.save(function (err) {
		if (err) return res.status(400).json("Erreur de connexion !")
		else return res.status(200).json("success")
	})
}
export function getAllGroups(req: Request, res: Response): void {
	Group.find({})
		.then((Group) => res.status(200).json(Group))
		.catch((error) => res.status(400).json({ error }))
}
export function deleteAllGroups(req: Request, res: Response): void {
	Group.remove({})
		.then(() => res.status(200).json("deleted"))
		.catch((error) => res.status(400).json({ error }))
}
