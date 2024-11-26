import express from "express";
import * as methodsControllers from "../controllers/methods-controller.js";

const router = express.Router();

router
  .route("/")
  .get(methodsControllers.getAllMethods) 
  .post(methodsControllers.addMethod); 

router
  .route("/:id")
  .put(methodsControllers.updateMethod)
  .delete(methodsControllers.deleteMethod);

export default router;
