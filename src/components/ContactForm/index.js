import { FormGroup } from "../FormGroup"
import { Form, ButtonContainer } from "./styles"
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import PropTypes from "prop-types";
import { useState } from "react";
import { isEmailValid } from "../../utils/isEmailValid";
import { useErrors } from "../../hooks/useErrors";
import { formatPhone } from "../../utils/formatPhone";



export function ContactForm({buttonLabel}) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const {setError, getErrorMessageByFieldName, removeError} = useErrors();

  function handleSubmit(event) {
    event.preventDefault();
    console.log({name, email, phone, category})
  }

  function handleNameChange(event) {
    setName(event.target.value)

    if (!event.target.value) {
      setError({field: 'name', message: 'nome é obrigatório'})
    } else {
      removeError('name')
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({field: 'email', message: 'Email inálido.'})
    } else {
      removeError('email')
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value))
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />

      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="WhatsApp">WhatsApp</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}
