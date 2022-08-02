import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';

function Nav() {
  const [ , dispatch] = useStoreContext();
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
          <li className="mx-1">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/home" onClick={() => {
          dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: '',
          });
        }}>

          <img src="/images/BistroBox.png" alt="Bistro Box" />
        </Link>
      </h1>

      <nav className="header-nav">{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
