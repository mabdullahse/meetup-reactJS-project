import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import Meetup from "../db";

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

        /* for dummy purpose to be removed : Start*/
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

        /* for dummy purpose to be removed : Start */
        let resp = Meetup;
        for (const key in resp) {
          meetupList.push({
            id: key,
            ...resp[key],
          });
        }
        setMeetupList(meetupList);
        setIsLoading(false);
        /* for dummy purpose to be removed : END */
        
      }
    }
    fetchDate();
  }, []);

  if (isLoading) {
    return <h1> Loading...</h1>;
  }
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupList} />
    </div>
  );
}

export default AllMeetups;
