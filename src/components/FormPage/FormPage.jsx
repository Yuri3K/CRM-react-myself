import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../App'
import FormBody from './FormBody';
import './FormPage.css';


const FormPage = () => {
  const location = useLocation()
  console.log("location", location)
  const { changeMainClass } = useContext(AppContext)

  useEffect(() => {
    changeMainClass(location.pathname)
  }, [])

  return (
    <div className="white-plate white-plate--payment">
      <div className="container-fluid">

        <div className="white-plate__header text-center">
          <p className="white-plate__logo">
            <span>Форма</span> заявок
          </p>
        </div>

        <div className="white-plate__line-between white-plate__line-between--main"></div>

        <FormBody />

      </div>
    </div>
  );
}

export default FormPage;