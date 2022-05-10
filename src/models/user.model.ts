import { getModelForClass, ModelOptions, prop } from "@typegoose/typegoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
//User Model
export class User {
  @prop({ type: String, required: true })
  public name: string;

  @prop({ type: String, required: true })
  public lastname: string;

  @prop({ type: String, required: true })
  public city: string;

  @prop({ type: String, required: true })
  public country: string;
  
  @prop({ type: String, required: true })
  public age: string;
}

const UserModel = getModelForClass(User);

export default UserModel;