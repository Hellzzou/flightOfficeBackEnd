import {Request, Response, NextFunction} from 'express'
import express from "express" // importe express
import { json } from "body-parser" // permet d'utiliser le format JSON
import { connect } from "mongoose" // importe mongoose
//const areaRoutes = require('./routes/area');
import typeRoutes from "./routes/type"
import simpilRoute from "./routes/simpil"
//const groupRoute = require('./routes/group');
import pilotRoute from "./routes/pilot"
import normRoute from "./routes/norm"
import newFlightRoute from "./routes/newFlight"
import validatedFlightRoute from "./routes/validatedFlight"
import userRoute from "./routes/user"
const app = express()
connect("mongodb://localhost:27017/bureaudesvols", { useNewUrlParser: true }) // connecte mongoose a la db

app.use(json())
app.use((req: Request, res: Response, next: NextFunction): void => {
	// sans autre argument cette fonction sera executee a toutes les requetes ( il autorise tout et evite donc les erreurs CORS)
	res.setHeader("Access-Control-Allow-Origin", "*") // permet à tous les ports d'acceder à notre serveur
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	) // autorise les headers
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	) // autorise les methodes d'acces a notre serveur
	next() // passe a la fonction de l'API suivante
})
//app.use('/api/area', areaRoutes);
app.use("/api/type", typeRoutes)
app.use("/api/simpil", simpilRoute)
//app.use('/api/group', groupRoute);
app.use("/api/pilot", pilotRoute)
app.use("/api/norm", normRoute)
app.use("/api/newFlight", newFlightRoute)
app.use("/api/validatedFlight", validatedFlightRoute)
app.use("/api/user", userRoute)

export default app // exporte notre appli express pour qu'on puisse l'utiliser sur le server.js
