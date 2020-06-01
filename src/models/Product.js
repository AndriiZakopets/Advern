import { Schema, model } from 'mongoose';

const schema = new Schema({
  ownerId: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true, default: '' },
  price: { type: Number, default: 0 },
  description: { type: String, default: '' },
  photos: { type: [String], default: [] },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: null },
});

// schema.methods.accountView = function () {
//   return {
//     id: this.id,
//     email: this.email,
//     fullName: this.fullName,
//     location: this.location,
//     avatar: this.avatar,
//     phone: this.phone,
//     createdAt: this.createdAt,
//     updatedAt: this.updatedAt,
//   };
// };

// schema.methods.userView = function () {
//   return {
//     id: this.id,
//     fullName: this.fullName,
//     location: this.location,
//     avatar: this.avatar,
//     phone: this.phone,
//     createdAt: this.createdAt,
//     updatedAt: this.updatedAt,
//   };
// };

export default model('Product', schema);
