import './assets/css/base/base.css'
import 'fontsource-roboto'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import List from './pages/List';
import Header from './components/Header';
import Pagina404 from './pages/Page404';
import { UserRegistration } from './pages/userRegistration';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/users/new" caseSensitive={false} element={<UserRegistration />} />
        <Route path="/users" caseSensitive={false} element={<List />} />
        <Route path="/about" caseSensitive={false} element={<About />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
