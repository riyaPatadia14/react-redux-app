const initialState = {
  BankBalance: [],
  Deposit: [],
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "onAppend":
      // add
      const { o } = action.payload;
      return {
        ...state,
        BankBalance: [...state.BankBalance, o],
      };
    case "onUnCheck":
      console.log("action.id", action.payload.id);
      const dispatchUnCheck = [
        ...state?.BankBalance?.filter((id) => id !== action.payload.id),
      ];
      console.log("red dispatchUnCheck :", dispatchUnCheck);
      console.log(
        "event: action.payload.event (filter):",
        action.payload.event
      );
      return {
        ...state,
        BankBalance: dispatchUnCheck,
      };
    case "onCheck": {
      const id = action.payload;
      console.log("onCheck", id);
      return {
        ...state,
        Deposit: id,
      };
    }
    case "onAccept":
      // debugger;
      const id = action.payload.id;
      console.log("id", id);
      const onChange = state.BankBalance.map((x) => {
        if (x.id == action.payload.id) {
          console.log("x = payload", (x = action.payload));
          return (x = action.payload);
        }
        console.log("re x:", x);
        return x;
      });
      console.log("BankBalance", state.BankBalance);
      return {
        ...state,
        BankBalance: onChange,
      };
    default:
      return state;
  }
};

export default reducer;
