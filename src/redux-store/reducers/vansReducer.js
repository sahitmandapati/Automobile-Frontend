const initialState = {
  vans: [],
  vansList: [],
};

export function getVansData(vans_data) {
  return {
    type: "GET_VANS_DATA",
    payload: vans_data,
  };
}

export function getVansListData(vans_list_data) {
  return {
    type: "GET_VANS_LIST_DATA",
    payload: vans_list_data,
  };
}

export default function vansDataReducer(vansData = initialState, action) {
  switch (action.type) {
    case "GET_VANS_DATA":
      return {
        ...vansData,
        vans: action.payload,
      };
    case "GET_VANS_LIST_DATA":
      return {
        ...vansData,
        vansList: action.payload,
      };
    default:
      return vansData;
  }
}
