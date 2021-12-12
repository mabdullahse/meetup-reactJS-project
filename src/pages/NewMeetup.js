import { useHistory } from "react-router";
import NewMeetupItem from "../components/meetups/NewMeetupItem";

function NewMeetups(props) {
  const historyInstance = useHistory();
  async function addMeetupHandler(formData) {
    const uri = `${process.env.REACT_APP_FIREBASE_URL}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const rawResponse = await fetch(uri, options);
      const resp = await rawResponse.json();
      console.log(resp);
      historyInstance.replace("/");
    } catch (err) {
      alert("This is dummy project, need to attached firebase URL");
      console.error(err["message"]);
    }
  }
  return (
    <div>
      <h1 style={{ marginBottom: "10px" }}>New Meetups Meetups</h1>
      <NewMeetupItem onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetups;
