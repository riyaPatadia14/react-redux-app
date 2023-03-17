export const onAdmin = (a, r) => {
  console.log("action a:", a);
  // console.log("action r:", r);
  return {
    type: "onAdmin",
    payload: a,
    r,
  };
};
export const onAppend = (e, o) => {
  console.log("o", o);
  return {
    type: "onAppend",
    payload: {
      e,
      o,
    },
  };
};
export const onCheck = (e, id) => {
  console.log("e", e);
  return {
    type: "onCheck",
    payload: id,
  };
};

export const onAccept = (id) => {
  console.log("onAccept", id);
  return {
    type: "onAccept",
    payload: id,
  };
};
export const onUnCheck = (event, id) => {
  return {
    type: "onUnCheck",
    payload: {
      event,
      id,
    },
  };
};
export const onWithdrawal = (w) => {
  console.log("w", w);
  return {
    type: "onWithdrawal",
    payload: {
      w,
    },
  };
};
