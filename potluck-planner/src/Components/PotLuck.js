import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPotluck } from "../actions/actions";



const PotLuck = (props) => {
//   const [visable, setVisable] = useState(false);
  const { getPotluck } = props;

  useEffect(() => {
    getPotluck();
  }, []);

  return (
    <div>
      {props.potluck.map((potluck) => {
        
        return <div className="potluck-card">
        <h2>Name: {potluck.name}</h2>
        <div>
          <p>Date: {potluck.date}</p>
          <p>Location: {potluck.location}</p>
          
        </div>
      </div>
      })}

      </div>
  );
};

function mapStateToProps(state) {
  return {
    potluck: state.potluck,
  };
}

export default connect(mapStateToProps, { getPotluck })(PotLuck);