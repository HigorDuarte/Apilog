import { SessionsController } from "@/controllers/session-controller"
import { Router } from "express"

const sessionRoutes = Router()
const sessionController = new SessionsController()

sessionRoutes.post("", sessionController.create)

export {sessionRoutes}