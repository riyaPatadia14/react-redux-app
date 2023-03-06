const initialState = {
  BankBalance: [],
  Deposit: [],
  Admin: {
    UserName: "Aparna Soni",
    Email: "aparnasoni@sebi.com",
    Password: "Admin@123",
  },
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "onAppend":
      // add
      const { o } = action.payload;
      console.log("o: ", action.payload);
      return {
        ...state,
        BankBalance: [...state.BankBalance, o],
      };
    case "onUnCheck":
      // delete
      console.log("action.id", action.payload.id);
      const dispatchUnCheck = [
        ...state?.BankBalance?.filter((id) => id !== action.payload.id),
      ];
      return {
        ...state,
        BankBalance: dispatchUnCheck,
      };
    case "onCheck": {
      //  edit
      const id = action.payload;
      console.log("onCheck", id);
      return {
        ...state,
        Deposit: id,
      };
    }
    case "onAccept":
      // update
      // debugger;
      const id = action.payload.id;
      const onChange = state.BankBalance.map((x) => {
        if (x.id == action.payload.id) {
          console.log("x = payload", (x = action.payload));
          return (x = action.payload);
        }
        return x;
      });
      return {
        ...state,
        BankBalance: onChange,
      };
    default:
      return state;
  }
};

export default reducer;
