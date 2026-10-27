import { DeliveriesStatusController } from "@/controllers/deliveries-status-controller";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";
import { DeliveriesController } from "@/controllers/deliveries-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authentication"; 
import { Router } from "express";   

const deliveriesRoutes = Router()

const deliveriesController = new DeliveriesController()
const deliveriesStatusController = new DeliveriesStatusController()

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sales"]))
deliveriesRoutes.post("/", deliveriesController.create)
deliveriesRoutes.get("/", deliveriesController.index)
deliveriesRoutes.patch("/:id/status", deliveriesStatusController.update)

export {deliveriesRoutes}