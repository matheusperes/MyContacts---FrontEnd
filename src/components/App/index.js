import GlobalStyles from '../../assets/styles/global';
import { ThemeProvider } from 'styled-components';
import defaulTheme from '../../assets//styles/themes/default';
import { Container } from './styles';
import Header from '../Header';
import Routes from '../../Routes';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaulTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
