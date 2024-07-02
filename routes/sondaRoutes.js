import { Router } from "express";
import SondaController from "../controllers/sondaController.js";

const routes = Router()
const sondaController = new SondaController()

routes.post('/', sondaController.insertSonda)
routes.get("/", sondaController.getAllSondas)
routes.get("/:id", sondaController.getSondasPorId)


export default routes