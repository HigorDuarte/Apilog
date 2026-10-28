import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";
import { ensureAuthenticated } from "@/middlewares/ensure-authentication";
import { DeliveryLogsController } from "@/controllers/delivery-logs-controller";
import { Router } from "express";

const deliveryLogsRoutes = Router()

const deliveryLogsController = new DeliveryLogsController

deliveryLogsRoutes.post(
    "/", 
    ensureAuthenticated, 
    verifyUserAuthorization(["sales"]), 
    deliveryLogsController.create
)

deliveryLogsRoutes.get(
    "/:delivery_id/show", 
    ensureAuthenticated, 
    verifyUserAuthorization(["sales", "customer"]), 
    deliveryLogsController.show
)

export {deliveryLogsRoutes}