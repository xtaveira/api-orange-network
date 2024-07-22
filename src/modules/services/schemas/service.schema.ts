import * as mongoose from 'mongoose';

export const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
  image: { type: String, default: '' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});
