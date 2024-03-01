import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { MensagemController } from './controllers/MensagemController'

import { authMiddleware } from './middlewares/authMiddleware'

const routes = Router()

routes.post('/login', new UserController().login)
routes.post('/user', new UserController().create)
routes.get('/users', authMiddleware, new UserController().users)
routes.get('/profile', authMiddleware, new UserController().getProfile)

routes.post('/mensagem', authMiddleware, new MensagemController().create)
routes.get('/mensagens', authMiddleware, new MensagemController().mensagens)
routes.get('/presenca/token/:hash', new MensagemController().confirmaPresenca)

export default routes
