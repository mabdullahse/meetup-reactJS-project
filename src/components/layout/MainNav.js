import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

import FavoritesContext from "../../store/favourites-context";

function MainNav(props) {
  const facmeetupCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <h2 className={classes.logo}> Meet up</h2>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/"> All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups"> New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              {" "}
              Favourite Meetups - {facmeetupCtx.totalFavorites}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNav;
