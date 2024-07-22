import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  orangeId: { type: String, unique: true, required: true },
  contact: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
});
