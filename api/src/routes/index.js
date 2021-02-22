import { Router } from 'express';
import MovieController from '../app/Controllers/MovieController.js'

const routes = Router();

routes.post('/search', MovieController.searchByTitle)
// routes.get('', MovieController.searchByYear)

export default routes