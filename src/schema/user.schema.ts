import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().nonempty({
    message: "name is required",
  }),
  lastname: z.string().nonempty({
    message: "description is required",
  }),
  city: z.string().nonempty({
    message: "city is required",
  }),
  country: z.string().nonempty({
    message: "country is required",
  }),
  age: z.string().nonempty({
    message: "age is required",
  }),
});

export type UserType = z.infer<typeof UserSchema>;