import { atom, selector } from "recoil";
import "./App.css";
import TextInput from "./components/TextInput";
import CharacterCount from "./components/CharacterCount";

export const textState = atom({
  key: "textState",
  default: "", // 빈 값
});
export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const test = get(textState);
  },
});

function App() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default App;
