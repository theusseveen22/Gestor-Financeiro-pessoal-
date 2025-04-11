import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div class="Nav-Menu">
            <Link to={"/"}>Início</Link>
            <Link to={"/add-receita"}>Adicionar Receita</Link>
            <Link to={"/add-despesa"}>Adicionar Despesa</Link>
        </div>
    );
};

export default Header;