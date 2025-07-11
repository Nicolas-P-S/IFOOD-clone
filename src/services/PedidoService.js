import PedidoRepository from "../repositories/PedidoRepository.js"

const PedidoService = {
    async criar(data) {
        const valorTotal = data.itens.reduce((total, item) =>{
            return total + (item.preco * item.quantidade)
        }, 0)

        const pedido = {
            cliente: data.clientes,
            itens: data.itens, valorTotal,
            status: "pendente",
        }

        return await PedidoRepository.salvar(pedido)
    }
}

export default PedidoService;