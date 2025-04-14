import Header from "../components/Header";

const addDespesa = () => {
    return (
        <div className="despesa-container">
            <Header />
            <div className="despesa-form-wrapper">
                <h1 className="despesa-title">Adicionar Despesa</h1>
                <form className="despesa-form">
                    <div className="form-group">
                        <label htmlFor="nome-despesa">Nome da Despesa:</label>
                        <input
                            type="text"
                            id="nome-despesa"
                            className="form-input"
                            placeholder="Ex: Aluguel, Supermercado..."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="valor-despesa">Valor:</label>
                        <input
                            type="number"
                            id="valor-despesa"
                            className="form-input"
                            placeholder="R$ 0,00"
                            step="0.01"
                            min="0"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tipo-despesa">Tipo de Despesa:</label>
                        <select
                            id="tipo-despesa"
                            name="tipo"
                            className="form-select"
                        >
                            <option value="recorrente">Recorrente</option>
                            <option value="comum">Comum</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="categoria-despesa">Categoria:</label>
                        <select
                            id="categoria-despesa"
                            name="categoria"
                            className="form-select"
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="alimentacao">Alimentação</option>
                            <option value="moradia">Moradia</option>
                            <option value="transporte">Transporte</option>
                            <option value="lazer">Lazer</option>
                            <option value="saude">Saúde</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-button">
                        Registrar Despesa
                    </button>
                </form>
            </div>
        </div>
    );
};

export default addDespesa;