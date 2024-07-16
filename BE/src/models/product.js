import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true,
        },
        slug: {
            type: String,
            unique: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            // required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
        },
        gallery: {
            type: Array,
        },
        description: {
            type: String,
        },
        discount: {
            type: Number,
            default: 0,
        },
        countInStock: {
            type: Number,
            default: 0,
        },
        featured: {
            type: Boolean,
            default: false,
        },
        tags: {
            type: Array,
        },
        // attributes: [
        //     {
        //        name: String,
        //        quantity: Number,
        //        required: true
        //     },
            
        // ],
        sku: {
           type: String,
        } ,//Tồn kho
        
        reviews: [
  {user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },}
        ]

    },
    { timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema);
