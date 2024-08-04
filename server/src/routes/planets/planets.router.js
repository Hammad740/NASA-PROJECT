import { Router } from 'express';
import { getAllPlanets } from './planets.controller.js';
const planetsRouter = new Router();

planetsRouter.get('/planets', getAllPlanets);

export { planetsRouter };
