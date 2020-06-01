import { Schema, model } from 'mongoose';

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  fullName: { type: String, required: true },
  avatar: { type: String, default: '' },
  location: { type: String, default: '' },
  phone: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null },
});

schema.methods.accountView = function () {
  return {
    id: this.id,
    email: this.email,
    fullName: this.fullName,
    location: this.location,
    avatar: this.avatar,
    phone: this.phone,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

schema.methods.userView = function () {
  return {
    id: this.id,
    fullName: this.fullName,
    location: this.location,
    avatar: this.avatar,
    phone: this.phone,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

export default model('User', schema);
