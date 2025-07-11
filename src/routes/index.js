import { Router } from "express"
import pedidoController from "../controllers/PedidoController.js"

const router = Router()

router.post('/pedidos', pedidoController.criarPedido)

export default router
