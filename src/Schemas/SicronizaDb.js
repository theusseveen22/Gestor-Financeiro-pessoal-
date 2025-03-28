const db = require('../ConnectionDb/db');

async function sincronizarBanco() {
  try {
    await db.sync();
    console.log('Tabelas sincronizadas com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar tabelas:', error);
  }
}

module.exports = sincronizarBanco;