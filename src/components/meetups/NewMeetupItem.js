import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupItem.module.css";

function NewMeetupItem(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    
    e.preventDefault();

    const newMeetupObj = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    props.onAddMeetup(newMeetupObj);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        
        <div className={classes.control}>
          <label htmlFor="title"> Meetup Title</label>
          <input id="title" required type="text" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="Image"> Image Url </label>
          <input id="Image" required type="url" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address"> Meetup Address</label>
          <input id="address" required type="text" ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description"> Description </label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.action}>
          <button> Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupItem;
