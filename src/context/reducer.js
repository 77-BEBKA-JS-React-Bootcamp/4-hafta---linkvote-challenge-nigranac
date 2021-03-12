import update from "react-addons-update";

const initialState = {
  item: [
    { points: 1, linkName: "Product", url: "https://google.com" },
    { points: 3, linkName: "Tesla", url: "https://tesla.com" },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASE":
      return update(state, {
        item: {
          [action.payload.index]: {
            points: { $set: action.payload.points + 1 },
          },
        },
      });

    case "DECREASE":
      return update(state, {
        item: {
          [action.payload.index]: {
            points: { $set: action.payload.points - 1 },
          },
        },
      });
    case "ADD":
      return {
        ...state,
        item: [
          ...state.item,
          {
            points: 0,
            linkName: action.payload.linkName,
            url: action.payload.url,
          },
        ],
      };
    case "DELETE":
      return {
        ...state,
        item: state.item.filter(
          (item, index) => item.linkName !== action.payload.linkName
        ),
      };
    case "ASCENDING":
      const increase = state.item.slice().sort(function (a, b) {
        return a.points - b.points;
      });
      state.item = increase;
      return { ...state };
    case "DESCENDING":
      const decrease = state.item.slice().sort(function (a, b) {
        return b.points - a.points;
      });
      state.item = decrease;
      return { ...state };
    default:
      return state;
  }
}
export default reducer;
