import React, { useState } from "react";

import { connect } from 'react-redux'

import {postPotluck} from '../../actions/actions'

const blankData = {
  name: "",
  date: "",
  location: "",
  dish: "",
  description: "",
  allergyalert: false,
  email: "",
};

function EventForm(props) {
  const [eventData, setEventData] = useState(blankData);
  // const id = useParams().id

  // useEffect(() => {
  //   // props.getPotluckByID(id)

  //       axiosWithAuth().get(`/api/potluck/${id}`)
  //       .then(res => {
  //         console.log('Action getByID --> ', res);
  //         setEventData({ name: res.data.name, description: res.data.description})
  //       })
  //       .catch(err => {
  //       console.log(err);
  // })    

    // when user clicks an edit button, get ID of that card
    // make a GET request using that ID
    // fill out the form with the response data you get back for it.
  // }, [])

 

  const change = (evt) => {
    const { name, value, checked, type } = evt.target;
    const toChange = type === "checkbox" ? checked : value;
    setEventData({ ...eventData, [name]: toChange });
  };

  const submit = (evt) => {
    evt.preventDefault();
    props.postPotluck(eventData)
    
  };


  return (
    <>
      <div className="eventForm">
        <div className="divH2">
          <h2>Event Form</h2>
        </div>
        <div className="eventFBox">
          <form onSubmit={submit}>
            <div className="eventItem">
              <label>Event Name</label>
              <input
                type="text"
                name="name"
                value={eventData.name}
                onChange={change}
              />
            </div>
            <div className="eventItem">
              <label>Date</label>
              <input
                type="text"
                name="date"
                value={eventData.date}
                onChange={change}
              />
            </div>
            <div className="eventItem">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={eventData.location}
                onChange={change}
              />
            </div>
            <div className="eventItem">
              <label>Dish Name</label>
              <input
                type="text"
                name="dish"
                value={eventData.dish}
                onChange={change}
              />
            </div>
            <div className="eventItem">
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={eventData.description}
                onChange={change}
              />
            </div>
            <div className="eventItem">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={eventData.email}
                onChange={change}
              />
            </div>
            <div className="eventItem">
              <label>Allergy Alert</label>
              <input
                type="checkbox"
                name="allergyalert"
                value={eventData.allergyalert}
                onChange={change}
              />
            </div>
            <div className="eventItemSub">
              <button id="subutton">Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return{
    potluck: state.potluck
  }
}

export default connect(mapStateToProps, {postPotluck})(EventForm)