import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-container">
        <Link to="/">
          <li>
            <img
              className="header-image"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </li>
        </Link>
        <ul className="un-order">
          <Link to="/">
            <li className="home">Home</li>
          </Link>
          <Link to="/jobs">
            <li className="home">Jobs</li>
          </Link>
        </ul>

        <button onClick={onClickLogout} className="log-out" type="submit">
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
