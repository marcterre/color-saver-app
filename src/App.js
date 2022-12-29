import Form from "./components/Form";
import ColorsEntry from "./components/ColorsEntry";

import { useState } from "react";

function App() {
  const [colors, setColors] = useState([]);

  function addColor(newColors) {
    console.log("add color");
    setColors((oldColors) => [
      ...oldColors,
      {
        ...newColors,
        id: crypto.randomUUID(),
      },
    ]);
  }

  return (
    <>
      <Form addColor={addColor} hexCode={colors.value} />
      <ColorsEntry colors={colors} />
    </>
  );
}

export default App;
