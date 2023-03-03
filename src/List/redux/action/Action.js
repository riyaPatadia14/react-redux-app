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
export const onCheck = (e) => {
  console.log("e", e);
  return {
    type: "onCheck",
    payload: e,
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
