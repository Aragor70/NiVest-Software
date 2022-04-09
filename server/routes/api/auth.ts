

import express, { Router } from 'express';


const router: Router = express.Router();

import AuthControlller from '../../controllers/AuthController';

const authControlller = new AuthControlller;

router.post('/', authControlller.login);

export default router;