import Joi from "joi"

export const helmSchema = Joi.object({
    merk_helm: Joi.string().min(1).required(),
    size: Joi.string().min(1).required(),
    warna: Joi.string().min(3).required(),
    stock: Joi.number().integer().required(),
    harga: Joi.number().integer().required()
})