import { UsersControllers } from "@/controllers/users-controller";

import { Router } from "express";

const usersRoutes = Router();
const usersControllers = new UsersControllers();

usersRoutes.post("/", usersControllers.create);

export {usersRoutes}