
import express from 'express';
import controllers from '../controllers/menus';

const router = express.Router();

router.get('/', controllers.getMenus);
router.get('/:id', controllers.getMenuById);
router.post('/', controllers.addMenu);
router.delete('/:id', controllers.deleteMenu);
router.put('/:id', controllers.updateMenu);


export default router;


