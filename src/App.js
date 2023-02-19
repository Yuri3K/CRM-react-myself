import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import FormPage from './components/FormPage/FormPage';
import MainPage from './components/MainPage/MainPage';
import { useState, useEffect, createContext } from 'react';
import { serverPath } from './helpers/variables'

export const AppContext = createContext(null)

function App() {
  // const location = useLocation();

  const [cources, setCources] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [bodyClass, setBodyClass] = useState('')


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

  // useEffect(() => {
  //   console.log("location", location)
  // }, [location])

  return (
    <div>
      <Router>
        <NavBar />
        <main>
          {isLoading && <h2>Loading...</h2>}
          <AppContext.Provider value={{ cources }}>
            <Routes>
              <Route path='/' element={cources && <FormPage />} />
              <Route path='/table' element={<MainPage />} />
            </Routes>
          </AppContext.Provider>
        </main>
      </Router>
    </div>
  );
}

export default App;
