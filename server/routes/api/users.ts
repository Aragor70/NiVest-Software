
import express, { Router } from 'express';
import UserController from '../../controllers/UserController';

const userController = new UserController;

const router: Router = express.Router();



router.post('/', userController.register);


export default router;