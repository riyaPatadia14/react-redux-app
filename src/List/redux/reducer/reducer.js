const initialState = {
  BankBalance: [],
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "onCheck": {
      let e = action.payload;
      console.log("e:", e);
      console.log("count", state);

      return {
        ...state,
        BankBalance: [e],
        count: state.count + 1,
      };
    }
    case "onAccept":
      const update = state.BankBalance.map((x) => {
        if (x.id == action.payload.id) {
          return (x = action.payload);
        }
        return x;
      });
      console.log(" Update in reducer", update);
      return {
        ...state,
        BankBalance: update,
      };
    default:
      return state;
  }
};

export default reducer;
