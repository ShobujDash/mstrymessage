import { Message } from './User';
import mongoose, { Schema, Document, Mongoose } from "mongoose";

export interface Message extends Document{
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required:true,
  },
  createdAt: {
    type: Date,
    required:true,
    default:Date.now,
  }
})



export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVarified: boolean;
  isAcceptingMessage: boolean;
  messages:Message[]
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Emial is required"],
    unique: true,
    match: [/.+\@.+\..+/, "please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "Varify code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "VarifyCode code is required"],
  },
  isVarified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema]
});



const UserModel = (mongoose.model.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;










