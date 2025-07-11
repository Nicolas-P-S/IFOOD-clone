const PedidoService = require("../services/PedidoService")

const PedidoController = {
    async criarPedido(req, res) {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio.' })
        }

        const { cliente, itens } = req.body;

        if (typeof cliente !== 'string' || !Array.isArray(itens) || itens.length === 0) {
            return res.status(400).json({ error: 'Dados inválidos. Envie cliente e itens corretamente.' })
        }

        try {
        const novoPedido = await PedidoService.criar({ cliente, itens })

        return res.status(201).json(novoPedido)
        } catch (error) {
        console.error('Erro interno:', error)
        return res.status(500).json({ error: 'Erro ao criar pedido.' })
        }
    }

}

module.exports = PedidoController