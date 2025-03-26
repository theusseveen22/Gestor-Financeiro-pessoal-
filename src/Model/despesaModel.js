const Despesa = require('../Schemas/despesa');

const getAll = async () => {
    return await Despesa.findAll();
}

const getById = async (idDespesa) => {
    try {
        const despesa = await Despesa.findByPk(idDespesa);

    if(!despesa) {
        return {message: 'NOTFOUND'}
    }

    return despesa;
        
    } catch (error) {
        console.error('Erro ao busca a despesa :', error)
    }
    
}

const updateDespesa = async (idDespesa, newData) => {
    try {
        const [affectedRows] = await Despesa.update(newData, {
          where: { id: idDespesa }
        });
    
        if (affectedRows === 0) {
          return {message: 'NOTFOUND'}
        }
    
        return {message: 'DESPESAUPDATED'};;
      } catch (error) {
        console.error('Erro ao atualizar despesa:', error);
        throw error;
    }
}


const deleteDespesa = async (despesaId) => {
    try {
        const deletedRows = await Despesa.destroy({
          where: { id: despesaId }
        });
    
        if (deletedRows === 0) {
            return {message: 'NOTFOUND'};
        }
    
        return {message: 'DESPESADELETED'};
      } catch (error) {
        console.error('Erro ao deletar despesa:', error);
        throw error;
    }
}

module.exports = {
    getAll,
    getById,
    updateDespesa,
    deleteDespesa
}
