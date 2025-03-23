import { Container, Header, ListHeader, Card, InputSearchContainer } from "./styles";
import Seta from '../../assets/images/icons/Seta.svg';
import Editar from '../../assets/images/icons/Editar.svg';
import Lixeira from '../../assets/images/icons/Lixeira.svg';
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Modal } from "../../components/Modal";
import { Loader } from "../../components/Loader";
import { useEffect, useMemo, useState } from "react";
import {formatPhone} from "../../utils/formatPhone"

export default function Home() {

  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredContacts = useMemo(() => {
    return (
      contacts.filter((contact) => (
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    )
  }, [contacts, searchTerm])

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json();
        setContacts(json)
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }, [orderBy])

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc')
    )
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <Container>

      <InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquisar contato..."
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>

      <Header>
        <strong>{filteredContacts?.length} {filteredContacts?.length === 1 ? 'contato' : 'contatos'}</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" className="sort-button" onClick= {handleToggleOrderBy}>
            <span>Nome</span>
            <img src={Seta} alt="Arrow" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>

            <span>{contact.email}</span>
            <span>{formatPhone(contact.phone)}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={Editar} alt="Editar" />
            </Link>
            <button type="button">
              <img src={Lixeira} alt="trash" />
            </button>
          </div>
        </Card>
      ))}


    </Container>
  )
}

