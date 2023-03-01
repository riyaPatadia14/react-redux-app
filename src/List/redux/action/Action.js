export const onCheck = (e) => {
  console.log("e", e);
  return {
    type: "onCheck",
    payload: e,
  };
};

export const onAccept = (id) => {
  return {
    type: "onAccept",
    payload: id,
  };
};
