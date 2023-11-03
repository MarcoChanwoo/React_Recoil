import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../App";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  return <div>TextInput</div>;
};

export default TextInput;
