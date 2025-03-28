const {getAll, getById, updateDespesa, deleteDespesa} = require('../Model/despesaModel');


const getAllController = async (_req, res) => {
    try {
        const getAllDespesas = await getAll();
        return res.json(getAllDespesas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar despesas' })
        console.error(error)
    }
}

module.exports = getAllController;