import { Router } from 'express';
import MovieController from '../app/Controllers/MovieController.js'

const routes = Router();

routes.get('/search', MovieController.searchByTitle)
// routes.get('', MovieController.searchByYear)

export default routes