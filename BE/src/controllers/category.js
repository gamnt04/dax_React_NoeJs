import { StatusCodes } from "http-status-codes";
import Category from "../models/category";

export const getAllCategorys = async (req,res) => {
    try {
        const categorys = await Category.find()
        return res.status(200).json({message: "Lấy thông tin Category thành công:", categorys})
    } catch (error) {
        return res.status(500).json({essage: error.message})
    }
}

export const getCategoryById = async (req,res) => {
    try {
        const category = await Category.findById(req.params.id)
        return res.status(200).json({message: "Lấy thông tin category thành công:", category})
    } catch (error) {
        return res.status(500).json({essage: error.message})
    }
}

export const addCategory = async (req,res) => {
    try {
        const category = await Category.create(req.body)
        return res.status(201).json({message: "Thêm category thành công:", category})
    } catch (error) {
         return res.status(500).json({message: error.message})
    }
}

export const removeCategory = async (req,res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:"Xoá category thành công!", category})
    } catch (error) {
         return res.status(500).json({essage: error.message})
    }
}

export const updateCategory = async (req,res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json({message:"Update category thành công!", category})
    } catch (error) {
           return res.status(500).json({essage: error.message})
    }
}
