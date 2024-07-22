import { Document } from 'mongoose';

export interface Service extends Document {
  id: string;
  name: string;
  contact: string;
  description: string;
  tags: string[];
  image: string;
  user: string;
}
