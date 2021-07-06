import http from "http" // importe le package HTTP de Node pour gerer les requete
import app from "./app" // importe l'application express

app.set("port", "3000") // definit le port pour l'application express

const server = http.createServer(app) // Creer le server en utlisant l'application express

server.listen(3000)
