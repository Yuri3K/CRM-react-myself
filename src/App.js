import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import FormPage from './components/FormPage/FormPage';
import MainPage from './components/MainPage/MainPage';
import { useState, useEffect, createContext } from 'react';
import { serverPath } from './helpers/variables'

export const AppContext = createContext(null)

function App() {

  const [cources, setCources] = useState(null)
  const [bids, setBids] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [mainClass, setMainClass] = useState('with-nav radial-bg flex-center')

  const changeMainClass = (location) => {
    switch (location) {
      case '/':
        setMainClass('with-nav radial-bg flex-center')
        break;
      case '/table':
        setMainClass('with-nav body--dashboard')
        break;
      case '/edit':
        setMainClass('with-nav')
        break;
      default:
        setMainClass('with-nav')
    }
  }

  useEffect(() => {
    if (!cources) {
      // setTimeout(() => {
      fetch(serverPath + 'cources')
        .then(response => response.json())
        .then(data => {
          setCources(data)
          setIsLoading(false)
        })
        .catch(error => console.log(error))
      // }, 1000)

    }
  }, [])

  useEffect(() => {
    if (!bids) {
      // setTimeout(() => {
      fetch(serverPath + 'bids')
        .then(response => response.json())
        .then(data => {
          setBids(data)
          setIsLoading(false)
        })
        .catch(error => console.log(error))
      // }, 1000)

    }
  }, [])

  return (
    <Router>
      <AppContext.Provider value={{ cources, changeMainClass, setMainClass }}>
        <NavBar />
        <main className={mainClass}>
          {isLoading && <h2>Loading...</h2>}
          <Routes>
            <Route path='/' element={cources && <FormPage />} />
            <Route path='/table' element={bids && <MainPage />} />
          </Routes>
        </main>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
