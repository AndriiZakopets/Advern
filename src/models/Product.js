import { Schema, model } from 'mongoose';

const schema = new Schema({
  ownerId: { type: String, required: true },
  title: {
    type: String,
    required: true,
    indexes: { title: 'text', type: 'text' },
  },
  location: { type: String, required: true, default: '' },
  price: { type: Number, default: 0 },
  description: { type: String, default: '' },
  photos: { type: [String], default: [] },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, default: null },
});

schema.methods.productView = function () {
  return {
    id: this.id,
    ownerId: this.ownerId,
    title: this.title,
    location: this.location,
    price: this.price,
    description: this.description,
    photos: this.photos,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

schema.index({ title: 'text', description: 'text' });

export default model('Product', schema);
