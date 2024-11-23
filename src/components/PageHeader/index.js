import { Link } from "react-router-dom/cjs/react-router-dom";
import { Container } from "./styles";
import Arrow from '../../assets/images/icons/Seta.svg'
import PropTypes from "prop-types";
export default function PageHeader({title}) {
  return (
    <Container>
      <Link to='/'>
        <img src={Arrow} alt="Seta" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
