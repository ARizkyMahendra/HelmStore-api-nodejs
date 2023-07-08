import express from "express";
import * as helmController from '../controller/helmController.js'

const router = express.Router()

router.get('/', helmController.getHelm);
router.get('/:id', helmController.getHelmById);
router.post('/', helmController.createHelm);
router.put('/:id', helmController.updateHelm);
router.delete('/:id', helmController.deleteHelm);

export default router;