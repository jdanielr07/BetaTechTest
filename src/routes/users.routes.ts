import { Router } from "express";
import {
  deleteUser,
  renderUser,
  renderUsers,
  createUser,
  updateUser,
} from "../controllers/user.controller";

const router = Router();

//These are the routes for the CRUD.

//http://localhost:3000/users/list
router.get("/list", renderUsers);

//http://localhost:3000/users/list/:id
router.get("/list/:id", renderUser);

//http://localhost:3000/users/create
router.post("/create", createUser);

//http://localhost:3000/users/delete/:id
router.delete("/delete/:id", deleteUser);

//http://localhost:3000/users/edit/:id
router.put("/edit/:id", updateUser);

export default router;