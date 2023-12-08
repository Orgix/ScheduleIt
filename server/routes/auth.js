import express from "express";
import { signIn, signUp, logout } from "../controllers/auth.js";
import { limiter } from "../middleware/Limiter.js";

const router = express.Router();

router.post('/signin',limiter, signIn)
router.post('/signup',signUp)
router.post('/signout', logout)
router.get('/refresh',)

export default router;