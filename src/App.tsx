import './assets/css/base/base.css'
import { Container } from '@material-ui/core'
import 'fontsource-roboto'
import { UserRegistration } from './pages/userRegistration';
import Navbars from './pages/nav/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from './pages/About';
import Home from './pages/Home';
import Pagina404 from './pages/Page404';

function App() {
  return (
    <Router>
      {/* <Navbars></Navbars>
      <Container component="article" maxWidth="lg">
        <UserRegistration />
      </Container> */}
     
     <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/sobre" caseSensitive={false} element={<Sobre />} />
        <Route path="*" element={<Pagina404 />} />
    </Routes>
</Router>
  );
}

export default App;
