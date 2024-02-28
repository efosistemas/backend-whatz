import { Router } from 'express'
import { TodoController } from './controllers/TodoController'

const routes = Router()

routes.post('/todo', new TodoController().create)
routes.get('/todos', new TodoController().todos)

export default routes
