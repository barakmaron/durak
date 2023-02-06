import express from "express";
import authController from '../controller/authController.js';
import AuthenticateToken from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post('/login', authController.Login);
router.get('/token', AuthenticateToken, authController.CheckToken);
router.post('/logout', authController.Logout);

export default router;