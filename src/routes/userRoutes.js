import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir:
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista um usuário

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * Index -> Lista todos os usuários -> GET
 * Store/create -> Cria um novo usuário -> POST
 * Delete -> Apaga um usuário -> DELETE
 * Show -> Mostra um usuário -> GET
 * Update -> Atualiza um usuário -> PATCH ou PUT
 */
