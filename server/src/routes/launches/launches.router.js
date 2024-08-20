import { Router } from 'express';
const launchesRouter = new Router();
import { getAllLaunches } from './launches.controller.js';
launchesRouter.get('/launches', getAllLaunches);

export { launchesRouter };
