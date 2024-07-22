import { Document } from 'mongoose';

export interface User extends Document {
  id: string;
  name: string;
  orangeId: string;
  contact: string;
  password: string;
  email: string;
  city: string;
  state: string;
  services: string[];
}
