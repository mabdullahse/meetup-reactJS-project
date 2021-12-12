import { useContext } from "react";

import FavoritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites(props) {
  const facmeetupCtx = useContext(FavoritesContext);

  let context = "";
  if (facmeetupCtx.totalFavorites === 0) {
    context = <p> there is No Context Boy</p>;
  } else {
    context = <MeetupList meetups={facmeetupCtx.favorites}></MeetupList>;
  }

  return (
    <div>
      <h1>My Favorite Item List</h1>
      {context}
    </div>
  );
}

export default Favorites;
