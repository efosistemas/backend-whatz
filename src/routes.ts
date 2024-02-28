import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { TodoController } from './controllers/TodoController'

const routes = Router()

routes.post('/user', new UserController().create)
routes.get('/users', new UserController().users)

routes.post('/todo', new TodoController().create)
routes.get('/todos', new TodoController().todos)

export default routes
