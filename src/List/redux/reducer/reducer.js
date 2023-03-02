const initialState = {
  BankBalance: [],
  count: 0,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "onCheck": {
      let e = action.payload;
      console.log("eaaaaaaaaa", e)
      return {
        ...state,
        BankBalance: e,
        
      };
    }
    case "onAccept":
      const onChange = state?.BankBalance?.map((x) => {
        if (x.id == action.payload.id) {
          return (x = action.payload);
        }
        // debugger;
        console.log("value", x);

        return x;
      });
      console.log(" Update in reducer", onChange);
      return {
        ...state,
        BankBalance: onChange,
      };
    case "onAppend":
      // debugger;
      const { e, o } = action.payload;
      // let o = action.payload;
      console.log("o", o);
      console.log(action.payload);
      console.log("count12", state);
      return {
        ...state,
        BankBalance: [...state.BankBalance, { e: e, o: o }],
        // count: state.count + 1,
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
