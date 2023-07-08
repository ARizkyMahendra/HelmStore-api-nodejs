import Helm from "../models/helm.js";
import { success, error, response } from "../helper/responses.js";
import { helmSchema } from "../validator/helmValidator.js";

export const getHelm = async(req, res, next)=>{
    try{
        const [result] = await Helm.getAll();

        success(res, "Oke", result)

    } catch (err){
        console.log("Terjadi Error: " + err.message);
        next(err)
    }
}

export const getHelmById = async(req, res, next)=>{
    try{
        const [result] = await Helm.getById(req.params.id);
        success(res, "oke", result);
        res.json({
            code: 200,
            message: "Ok",
            data: result[0]
        });
    }catch(err){
        console.log(err);
        next(err);
    }
}

export const createHelm = async(req, res, next)=>{
    try{
        const value =await helmSchema.validateAsync(req.body);
        const [result] = await Helm.create(value);
        
        res.json({message: 'Data created successfully!'})

    }catch(err){
        console.log(err.message);
        next(err);
    }
}

export const updateHelm = async (req, res, next) => {
    try {
      const value = await helmSchema.validateAsync(req.body);
      await Helm.update(req.params.id, value);
      res.json({ message: 'Helm updated successfully!' });
    } catch (err) {
      next(err);
    }
};

export const deleteHelm = async (req, res, next) => {
    try {
      await Helm.delete(req.params.id);
      res.json({ message: 'Helm deleted successfully!' });
    } catch (err) {
      next(err);
    }
};

