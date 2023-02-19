import SelectProduct from "./SelectProduct";
import { useState } from "react";
import { serverPath } from '../../helpers/variables'


const FormBody = () => {

  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userCource, setUserCource] = useState('')




  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      userName, userPhone, userEmail, userCource
    }
    fetch(serverPath + 'bids', {
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((data) => {
      console.log('BIDSS', data)
    })
  }

  return (
    <form id="form" method="POST" action="">
      <label>Ваши данные:</label>
      <div className="form-group">
        <input onChange={(e) => setUserName(e.target.value)} id="name" type="text" name="name" autoComplete="on" className="form-control" placeholder="Имя и Фамилия" required />
      </div>
      <div className="form-group">
        <input onChange={(e) => setUserPhone(e.target.value)} id="phone" type="text" name="phone" autoComplete="on" className="form-control" placeholder="Телефон" />
      </div>
      <div className="form-group">
        <input onChange={(e) => setUserEmail(e.target.value)} id="email" type="email" name="email" autoComplete="on" className="form-control" placeholder="Email" required />
      </div>
      <SelectProduct onChange={(e) => setUserCource(e.target.value)} />
      <div className="form-group">
        <button onClick={onSubmitForm} type="submit" className="btn btn-lg btn-primary btn-block">Оформить заявку</button>
      </div>
    </form>
  );
}

export default FormBody;