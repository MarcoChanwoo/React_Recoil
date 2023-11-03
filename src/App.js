import { atom, useRecoilState } from "recoil";
import "./App.css";
import TextInput from "./components/TextInput";
import CharacterCount from "./components/CharacterCount";

export const textState = atom({
  key: "textState",
  default: "", // 빈 값
});

function App() {
  const [text, setText] = useRecoilState(textState);
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default App;
