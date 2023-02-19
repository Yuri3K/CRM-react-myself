import SelectProduct from "./SelectProduct";
import { useState, useEffect } from "react";
import { serverPath } from '../../helpers/variables'
import { randomBid } from "../../helpers/randomBid";


const FormBody = () => {
  const { name, phone, email, course } = randomBid

  const [userName, setUserName] = useState(name)
  const [userPhone, setUserPhone] = useState(phone)
  const [userEmail, setUserEmail] = useState(email)
  const [userCource, setUserCource] = useState(course)

  useEffect(() => {
    console.log('Form')
  }, [userName, userPhone, userEmail, userCource])

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      userName,
      userPhone,
      userEmail,
      userCource,
      status: 'new',
      date: new Date().toISOString(),
    }
    fetch(serverPath + 'bids', {
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((data) => {
      console.log('BIDSS', data)
      setUserName('')
      setUserPhone('')
      setUserEmail('')
      setUserCource('')
    })
  }

  return (
    <form id="form" method="POST" action="">
      <label>Ваши данные:</label>
      <div className="form-group">
        <input onChange={(e) => setUserName(e.target.value)} id="name" type="text" name="name" autoComplete="on" className="form-control" placeholder="Имя и Фамилия" required value={userName} />
      </div>
      <div className="form-group">
        <input onChange={(e) => setUserPhone(e.target.value)} id="phone" type="text" name="phone" autoComplete="on" className="form-control" placeholder="Телефон" value={userPhone} />
      </div>
      <div className="form-group">
        <input onChange={(e) => setUserEmail(e.target.value)} id="email" type="email" name="email" autoComplete="on" className="form-control" placeholder="Email" required value={userEmail} />
      </div>
      <SelectProduct onChange={(e) => setUserCource(e.target.value)} value={userCource} />
      <div className="form-group">
        <button onClick={onSubmitForm} type="submit" className="btn btn-lg btn-primary btn-block">Оформить заявку</button>
      </div>
    </form>
  );
}

export default FormBody;