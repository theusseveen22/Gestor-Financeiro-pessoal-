import Header from "../components/Header";

const addReceita = () => {
    return (
        <div className="add-receita-container">
            <Header />
            <div className="receita-form-container">
                <h1 className="receita-title">Adicionar Receita</h1>
                <form className="receita-form">
                    <div className="form-group">
                        <label htmlFor="nome-receita">Nome da Receita:</label>
                        <input 
                            type="text" 
                            id="nome-receita" 
                            className="form-input"
                            placeholder="Ex: Salário, Freelance..."
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="valor-receita">Valor:</label>
                        <input 
                            type="number" 
                            id="valor-receita" 
                            className="form-input"
                            placeholder="R$ 0,00"
                            step="0.01"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="tipo-receita">Tipo de Receita:</label>
                        <select 
                            id="tipo-receita" 
                            name="tipo" 
                            className="form-select"
                        >
                            <option value="recorrente">Recorrente</option>
                            <option value="comum">Comum</option>
                        </select>
                    </div>
                    
                    <button className="submit-button">Gravar Receita</button>
                </form>
            </div>
        </div>
    )
}

export default addReceita;