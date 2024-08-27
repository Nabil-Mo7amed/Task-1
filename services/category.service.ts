import categoryModel from "../models/category.model"
import express from "express";

export const createCategory=async(req:express.Request,res:express.Response)=>{
 const category=  await categoryModel.create(req.body)
   res.status(200).json(category)
}

export const getCategorys=async(req:express.Request,res:express.Response)=>{
 const category=  await categoryModel.find()
   res.status(200).json(category)
}