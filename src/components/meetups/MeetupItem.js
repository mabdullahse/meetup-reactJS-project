import { useContext } from "react";

import FavoritesContext from "../../store/favourites-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext);
  console.log(favoriteCtx);
  let isFavoriteMeetup = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavouriteHanlder() {
    if (isFavoriteMeetup) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        image: props.image,
        detail: props.detail,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  }
  return (
    <li className={classes.meetupli} key={props.id}>
      <Card>
        <img className={classes.image} src={props.image} alt={props.title} />
        <div className={classes.detail}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.action}>
          <button
            className={classes.favButton}
            onClick={toggleFavouriteHanlder}
          >
            {isFavoriteMeetup ? "Remvoe from Favorite" : "Add to Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
