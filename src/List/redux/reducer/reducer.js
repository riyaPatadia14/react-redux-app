const initialState = {
  BankBalance: [],
  count: 0,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "onCheck": {
      let e = action.payload;
      console.log("e:", e);
      console.log("count", state);

      return {
        ...state,
        BankBalance: e,
        count: state.count + 1,
      };
    }
    case "onAccept":
      const onChange = state?.BankBalance?.map((x) => {
        if (x.id == action.payload.id) {
          return (x = action.payload);
        }
        debugger;
        console.log("value", x);

        return x;
      });
      console.log(" Update in reducer", onChange);
      return {
        ...state,
        BankBalance: onChange,
      };
    case "onAppend":
      const { e, o } = action.payload;
      // let o = action.payload;
      console.log("o", o);
      console.log(action.payload);
      return {
        ...state,
        BankBalance: [...state.BankBalance, { e: e, o: o }],
      };
    case "onUnCheck":
      const dispatchUnCheck = state?.BankBalance?.filter(
        (x) => x.id !== action.id
      );
      return {
        ...state,
        BankBalance: dispatchUnCheck,
      };
    default:
      return state;
  }
};

export default reducer;
