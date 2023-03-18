const initialState = {
  vans: [],
};

export function getVansData(vans_data) {
  return {
    type: "GET_VANS_DATA",
    payload: vans_data,
  };
}

export default function vansDataReducer(vansData = initialState, action) {
  switch (action.type) {
      case "GET_VANS_DATA":
        return {
          ...vansData,
          vans: action.payload,
        };
    default:
      return vansData;
  }
}
