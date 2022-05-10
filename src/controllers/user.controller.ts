import { Request, Response } from "express";
import User from "../models/user.model";
import { UserSchema, UserType } from "../schema/user.schema";

// This is a function to get all users.
export const renderUsers = async (req: Request, res: Response) => {
  const users = await User.find().lean();
  res.render("users/list", { users });
};

//This is a function to get just one user by id.
export const renderUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const users = [await User.findById(id).lean()];
    res.render("users/list", { users });
  } catch (errors: any){
    return res.render("users/list", {
      errors: [{ message: "User not found" }],
    });
  }
};

//This is a function to create a new user.
export const createUser = async (
  req: Request<{}, {}, UserType>,
  res: Response
) => {
  try {
    const { name, lastname, city, country, age } = UserSchema.parse(req.body);
    const user = new User({ name, lastname, city, country, age });
    await user.save();
    res.redirect("/users/list");
  } catch (errors: any) {
    if (errors.issues) {
      return res.render("users/create", { errors: errors.issues });
    }
    return res.render("users/create", {
      errors: [{ message: "Something Goes Wrong" }],
    });
  }
};

// This is a function to delete users by id
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userDeleted = await User.findByIdAndDelete(id);
  if (!userDeleted) return res.sendStatus(404);
  res.redirect("/users/list");
};

//This is a function to update the user info.
export const updateUser = async (
  req: Request<any, {}, UserType>,
  res: Response
) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, req.body);
  return res.redirect("/users/list");
};