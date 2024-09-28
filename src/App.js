import { useTranslation } from 'react-i18next';
import './App.css';
import Main from './components/Main';
import './util/i18n.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Questions from './components/Questions.js';
import Types from './components/Types.js';
import { useEffect, useState } from 'react';

function App() {
  const { t, i18n } = useTranslation();
  const [lan, setLan] = useState("ko");
  const handleLanChange = (lan) => {
    setLan(lan);
    localStorage.setItem("Language", lan);
  }
  useEffect(() => {
    if (localStorage.getItem("Language")) {
      setLan(localStorage.getItem("Language"));
    }
    i18n.changeLanguage(lan);
  }, [lan]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main t={t} setLan={handleLanChange} />} />
        <Route path='/test' element={<Questions t={t} />} />
        <Route path='/types' element={<Types t={t} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
