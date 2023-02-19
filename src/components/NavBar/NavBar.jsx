import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="project-nav">
      <div className="project-nav__links-wrapper">
        <Link to="/">Форма добавления заявок</Link>
        <Link to="/table">Таблица с заявками</Link>
        <Link to="/edit">Редактирование заявки</Link>
      </div>
    </nav>
  )
}

export default NavBar