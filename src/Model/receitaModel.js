const Receita = require('../Schemas/receita');

const getAll = async () => {
    return await Receita.findAll();
}

const getById = async (idReceita) => {
    try {
        const receita = await Receita.findByPk(idReceita);

    if(!receita) {
        return {message: 'NOTFOUND'}
    }

    return receita;
        
    } catch (error) {
        console.error('Erro ao busca receita :', error)
    }
    
}

const updateReceita = async (idReceita, newData) => {
    try {
        const [affectedRows] = await Receita.update(newData, {
          where: { id: idReceita }
        });
    
        if (affectedRows === 0) {
          return {message: 'NOTFOUND'}
        }
    
        return {message: 'RECEITAUPDATED'};;
      } catch (error) {
        console.error('Erro ao atualizar receita:', error);
        throw error;
    }
}


const deleteReceita = async (receitaId) => {
    try {
        const deletedRows = await Receita.destroy({
          where: { id: receitaId }
        });
    
        if (deletedRows === 0) {
            return {message: 'NOTFOUND'};
        }
    
        return {message: 'RECEITADELETED'};
      } catch (error) {
        console.error('Erro ao deletar receita:', error);
        throw error;
    }
}

module.exports = {
    getAll,
    getById,
    updateReceita,
    deleteReceita
}
