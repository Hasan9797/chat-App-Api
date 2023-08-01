import { Schema, model } from 'mongoose';
const productSchema = new Schema(
	{
		title: { type: String, required: true },
		type: { type: String, required: true },
		model: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: Number, required: true },
		img: { type: String, required: true },
	},
	{ timestamps: true }
);

export default model('Product', productSchema);
