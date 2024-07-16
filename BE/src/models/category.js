import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        name: {
            type: String,
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
        },
        // products: [
        //     {
        //         name: String,
        //         image: String,
        //         price: Number,
        //          attributes: [
        //     {
        //        name: String,
        //        quantity: Number,
        //        required: true
        //     },
            
        // ],

        //     }
        // ]
    },
    { timestamps: true, versionKey: false }
);
export default mongoose.model("Category", categorySchema);
