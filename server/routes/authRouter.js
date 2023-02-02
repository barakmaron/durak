import express from "express";
import authController from '../controller/authController.js';

const router = express.Router();

router.post('/login', authController.Login);
router.post('/logout', authController.Logout);

export default router;