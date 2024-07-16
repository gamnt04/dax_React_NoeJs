import { StatusCodes } from "http-status-codes";
import Product from "../models/product";

export const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find()
        return res.status(200).json({message: "Lấy thông tin products thành công:", products})
    } catch (error) {
        return res.status(500).json({essage: error.message})
    }
}

export const getProductById = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id)
        return res.status(200).json({message: "Lấy thông tin sản phẩm thành công:", product})
    } catch (error) {
        return res.status(500).json({essage: error.message})
    }
}

export const addProduct = async (req,res) => {
    try {
        const product = await Product.create(req.body)
        return res.status(201).json({message: "Thêm sản phẩm thành công:", product})
    } catch (error) {
         return res.status(500).json({message: error.message})
    }
}

export const removeProduct = async (req,res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:"Xoá sản phẩm thành công!", product})
    } catch (error) {
         return res.status(500).json({essage: error.message})
    }
}

export const updateProduct = async (req,res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json({message:"Update sản phẩm thành công!", product})
    } catch (error) {
           return res.status(500).json({essage: error.message})
    }
}

