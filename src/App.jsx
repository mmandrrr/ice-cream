import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import './styles/App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
