import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import './styles/App.css';
import Main from './components/Main/Main';

function App() {

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}

export default App