const initialState = {
  BankBalance: [],
  Deposit: [],
  Withdrawal: [],
  Admin: [
    {
      UserName: "Aparna Soni",
      Email: "aparnasoni@sebi.com",
      Password: "Admin@123",
      role: "ADMIN",
    },
  ],
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "onWithdrawal":
      // withdrawal
      debugger;
      const { w } = action.payload;
      return {
        ...state,
        count: [state.count + 1],
        Withdrawal: [...state.Withdrawal, w],
      };
    case "onAdmin":
      // admin
      const a = action.payload;
      const onALog = state?.Admin.map((x) => x.UserName == a.UserName);
      return {
        ...state,
        Admin: onALog,
      };
    case "onAppend":
      // add bankbalance
      const { o } = action.payload;
      return {
        ...state,
        BankBalance: [...state.BankBalance, o],
      };
    case "onUnCheck":
      // delete bankbalance
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
      // console.log("onCheck", id);
      return {
        ...state,
        Deposit: id,
      };
    }
    case "onAccept":
      // update
      // debugger;
      const id = action.payload;
      console.log("id", id);
      const onChange = state?.BankBalance.map((x) => {
        console.log("action.payload.id", action.payload.id);
        // debugger;
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
