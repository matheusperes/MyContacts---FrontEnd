import { Container, Header, ListContainer, Card, InputSearchContainer } from "./styles";
import Seta from '../../assets/images/icons/Seta.svg';
import Editar from '../../assets/images/icons/Editar.svg';
import Lixeira from '../../assets/images/icons/Lixeira.svg';
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Modal } from "../../components/Modal";
import { Loader } from "../../components/Loader";

export default function Home() {
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>1 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={Seta} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Matheus Peres</strong>
              <small>instagram</small>
            </div>

            <span>matheus.peres12347@gmail.com</span>
            <span>(11) 9999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={Editar} alt="Editar" />
            </Link>
            <button type="button">
              <img src={Lixeira} alt="trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}
