import {
  DELETE_DATA,
  DELETE_POTLUCK,
  FETCH_DATA,
  GET_POTLUCK,
  GET_POTLUCK_BY_ID,
  POST_DATA,
  POST_POTLUCK,
  PUT_DATA,
  PUT_POTLUCK,
} from "../actions/actions";

export const initialState = {
  profile: [],
  potluck: []
};



export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        profile: action.payload,
      };
    case POST_DATA:
      return {
        ...state,
        profile: action.payload,
      };
    case PUT_DATA:
      return {
        ...state,
        profile: state.profile.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_DATA:
      return {
        ...state,
        profile: state.profile.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case GET_POTLUCK:
      return {
        ...state,
        potluck: action.payload,
      };
    case GET_POTLUCK_BY_ID:
        return{
            ...state,
            potluck: action.payload
        }
    case POST_POTLUCK:
      return {
        ...state,
        potluck: action.payload,
      };
    case PUT_POTLUCK:
      return {
        ...state,
        potluck: state.potluck.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_POTLUCK:
      return {
        ...state,
        potluck: state.potluck.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    default:
      return state;
  }
};

