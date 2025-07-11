let pedidos = [];

const PedidoRepository = {
    async salvar(pedido) {
        const novoPedido = { id: pedidos.length + 1, ...pedido}
        pedidos.push(novoPedido)
        return novoPedido
    },

    async listaTodos(){
        return pedidos
    }
}

export default PedidoRepository
