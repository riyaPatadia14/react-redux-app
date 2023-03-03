import BankBalance from "../../component/BankBalance";

const initialState = {
  BankBalance: [],
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "onCheck": {
      let e = action.payload;
      console.log("eaaaaaaaaa", e);
      console.log(
        "arr",
        state.BankBalance.filter((c, index) => {
          return state.BankBalance.indexOf(c) !== index;
        })
      );
      return {
        ...state,
        BankBalance: e,
      };
    }
    case "onAccept":
      // const onChange = state?.BankBalance?.map((x) => {
      //   if (x.id == action.payload.id) {
      //     console.log("action.payload", action.payload);
      //     return (x = action.payload);
      //   }
      //   // debugger;
      //   console.log("value", x);
      //   return x;
      // });
      // console.log(" Update in reducer", onChange);
      const xyz = state?.BankBalance?.map((x) => {
        // debugger;
        if (!x == action.payload) {
          return x;
        }
      });
      const v = state.BankBalance.map((x) => {
        x.filter((t) => t.id == action.payload);
      });
      console.log("v", v);
      return {
        ...state,
        BankBalance: !xyz.BankBalance,
      };
    case "onAppend":
      const { o } = action.payload;
      console.log("BankBalance", state.BankBalance);
      console.log("o.id :-", o.id);
      const filterData = state.BankBalance.filter((val) => val.id == o.id);
      console.log("filterData :-", filterData);
      return {
        ...state,
        BankBalance: [...state.BankBalance, o],
      };

    case "onUnCheck":
      console.log(
        "state?.BankBalance",
        state?.BankBalance?.filter((x) => x !== action.payload)
      );
      console.log("action.id", action.payload.id);
      const dispatchUnCheck = [
        ...state?.BankBalance?.filter((id) => id !== action.payload.id),
      ];
      console.log(
        "purple",
        state?.BankBalance.map((x) => x.id)
      );
      console.log("red dispatchUnCheck :", dispatchUnCheck);
      console.log(
        "event: action.payload.event (filter):",
        action.payload.event
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
