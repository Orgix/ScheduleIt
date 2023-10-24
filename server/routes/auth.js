import express from "express";
import { signIn, signUp, signout } from "../controllers/auth.js";

const router = express.Router();

router.get('/signin',signIn)
router.post('/signup',signUp)
router.get('/signout', signout)

export default router;