import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {getPotluckByID, putPotluck} from "../../actions/actions";
import {useParams, useHistory} from "react-router-dom"
import {axiosWithAuth} from '../../utils/axiosWithAuth'

// import {axiosWithAuth} from "../../utils/axiosWithAuth"

const blankData = {
    name: "",
    date: "",
    location: "",
    dish: "",
    description: "",
    allergyalert: false,
    email: "",
  };

  
  function EditEventForm(props) {
    const {getPotluckByID, putPotluck} = props
    const [eventData, setEventData] = useState(blankData)
     const {id} = useParams()
     const history = useHistory()

  useEffect(() => {
      console.log('CHANGE --> ', id)

      axiosWithAuth().get(`/api/potluck/${id}`)
      .then(res => {
          console.log('Action getByID --> ', res);
          setEventData({
            name: res.data.name,
            date: res.data.date,
            location: res.data.location,
            dish: res.data.dish,
            description: res.data.description,
            allergyalert: res.data.allergyalert,
            email: res.data.email,
          })
      })
      .catch(err => {
      console.log(err);
  })   

    // when user clicks an edit button, get ID of that card
    // make a GET request using that ID
    // fill out the form with the response data you get back for it.
  }, [])

  const change = e => {
    const {name, value, checked, type} = e.target;
    const toChange = type === "checkbox" ? checked : value;
    setEventData({...eventData, [name]: toChange})
  }
  const submit = (e) => {
    e.preventDefault()
    putPotluck(id, eventData)
    history.push("/protected")
  }
  
  return(
      <>
      <div className="editEventForm">
          <div className="divH2">
              <h2>Edit Event Form</h2>
          </div>
          <div className="editEventbox">
              <form onSubmit={submit}>
                  <div className="eventItem">
                      <label>Event Name</label>
                      <input
                      type="text"
                      name="name"
                      value={eventData.name}
                      placeholder={eventData.name}
                      onChange={change}
                      />
                  </div>
                  <div className="eventItem">
                      <label>Date</label>
                      <input
                      type="text"
                      name="date"
                      value={eventData.date}
                      placeholder={eventData.date}
                      onChange={change}
                      />
                  </div>
                  <div className="eventItem">
                      <label>Location</label>
                      <input
                      type="text"
                      name="location"
                      value={eventData.location}
                      placeholder={eventData.location}
                      onChange={change}
                      />
                  </div>
                  <div className="eventItem">
                      <label>Dish Name</label>
                      <input
                      type="text"
                      name="dish"
                      value={eventData.dish}
                      placeholder={eventData.dish}
                      onChange={change}
                      />
                  </div>
                  <div className="eventItem">
                      <label>Description</label>
                      <input
                      type="text"
                      name="description"
                      value={eventData.description}
                      placeholder={eventData.description}
                      onChange={change}
                      />
                  </div>
                  <div className="eventItem">
                      <label>Email</label>
                      <input
                      type="text"
                      name="email"
                      value={eventData.email}
                      placeholder={eventData.email}
                      onChange={change}
                      />
                  </div>
                  <div className="eventItem">
                      <label>Allergy Alert</label>
                      <input
                      type="checkbox"
                      name="allergyalert"
                      value={eventData.allergyalert}
                      placeholder={eventData.allergyalert}
                      onChange={change}
                      />
                  </div>
                  <div className="editEventItemSub">
              <button id="subutton">Submit</button>
            </div>
              </form>
          </div>
      </div>
      </>
  )

  }
  function mapStateToProps(state) {
      return{
          potluck: state.potluck
      }
  }

  export default connect(mapStateToProps, {getPotluckByID, putPotluck})(EditEventForm)
 
 
 
 
 
