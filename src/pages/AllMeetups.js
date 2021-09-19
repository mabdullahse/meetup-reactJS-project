import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups(props) {
  const [isLoading, setIsLoading] = useState(true);

  const [meetupList, setMeetupList] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    async function fetchDate() {
      const uri = `${process.env.REACT_APP_FIREBASE_URL}`;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const rawResponse = await fetch(uri, options);
        const resp = await rawResponse.json();

        const meetupList = [];

        for (const key in resp) {
          meetupList.push({
            id: key,
            ...resp[key],
          });
        }

        setMeetupList(meetupList);
        setIsLoading(false);
      } catch (err) {
        console.error(err["message"]);
      }
    }
    fetchDate();
  }, []);

  if (isLoading) {
    return <h1> Loading...</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Meetups</h1>
      <MeetupList meetups={meetupList} />
    </div>
  );
}

export default AllMeetups;
