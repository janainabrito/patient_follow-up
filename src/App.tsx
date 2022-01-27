import './App.css';
import { Container } from '@material-ui/core'
import 'fontsource-roboto'
import { UserRegistration } from './pages/userRegistration';
import Navbars from './pages/nav/nav';

function App() {
  return (
    <>
      <Navbars></Navbars>
      <Container component="article" maxWidth="lg">
        <UserRegistration />
      </Container>
    </>
  );
}

export default App;
