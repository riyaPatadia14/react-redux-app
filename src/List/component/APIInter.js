import React, { useEffect } from "react";
import instance from "../endpoints/APIInterceptors";

const APIInter = () => {
  useEffect(() => {
    instance.get().then((re) => console.log("re", re.data));
  });

  return <div>hello World</div>;
};

export default APIInter;
