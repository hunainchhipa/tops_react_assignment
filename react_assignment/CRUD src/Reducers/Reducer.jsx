const InitialData = {
  details: [],
  isResponse: false,
  isDelete: false,
  isUpdate: false,
};

const reducer = (state = InitialData, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        details: action.payload,
      };

    case "POST_DETAILS":
      //   console.log(state.details, action.payload, "details and payload");
      //   console.log([...state.details, action.payload], "modified state");
      return {
        // ...state,
        isResponse: action.payload,
        // details: [...state.details, action.payload],
      };

    case "DELETE_DETAILS":
      return {
        isDelete: action.payload,
      };

    case "UPDATE_DETAILS":
      return {
        isUpdate: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
