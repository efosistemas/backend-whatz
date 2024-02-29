import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { MensagemController } from './controllers/MensagemController'
import { authMiddleware } from './middlewares/authMiddleware'

const routes = Router()

routes.post('/login', new UserController().login)
routes.post('/user', new UserController().create)
routes.get('/users', authMiddleware, new UserController().users)
routes.get('/profile', authMiddleware, new UserController().getProfile)

routes.get('/mensagens', new MensagemController().mensagens)
routes.post('/mensagem', new UserController().create)

export default routes
