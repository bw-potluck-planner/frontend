import React from "react";
import axios from "../../../node_modules/axios";

const blankData = {
  Name: "",
  Date: "",
  Location: "",
  "Dish Name": "",
  Description: "",
  AllergyAlert: false,
  Email: "",
};

export default function EventBody() {
  const [eventData, setEventData] = useState(blankData);

  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        console.log(res);
        // setEventData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="eventBody">
        <h2>{eventData.Name === "" ? eventData.Name : "EVENT NAME"}</h2>
        <div>
          <p>Date: {eventData.Date === "" ? eventData.Date : "2000/22/22"}</p>
          <p>
            Location:{" "}
            {eventData.Location === "" ? eventData.Location : "Somewhere, OR"}
          </p>
          <p>
            Items:{" "}
            {eventData["Dish Name"] === ""
              ? eventData["Dish Name"]
              : "No Items"}
          </p>
          <p>
            Description:{" "}
            {eventData.Description === ""
              ? eventData.Description
              : "Description goes here"}
          </p>
          <p>
            Allergy Alert:{" "}
            {eventData.AllergyAlert ? "Allergy Warning" : "No Allergy Warning"}
          </p>
          <p>
            Contact: {eventData.Email === "" ? eventData.Email : "No Email"}
          </p>
        </div>
      </div>
    </>
  );
}
