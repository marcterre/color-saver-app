import Form from "./components/Form";
import ColorsEntry from "./components/ColorsEntry";

import { useEffect, useState } from "react";
import useLocaStorageState from "use-local-storage-state";

// const url = "https://www.thecolorapi.com/id?hex=<hexcode here>";

function App() {
  const [colors, setColors] = useLocaStorageState("colors", {
    defaultValue: [],
  });
  const [showResults, setShowResults] = useState(false);
  // const [copyButton, setCopyButton] = useState(false);

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

  // useEffect(() => {
  //   async function fetchColors() {
  //     try {
  //       const response = await fetch(url);
  //       const getColors = await response.json();
  //       console.log(getColors);
  //       // setColors(getColors);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchColors();
  // });

  function handleDelete(id) {
    setColors((oldColors) => oldColors.filter((color) => color.id !== id));
  }

  function HandleCopy(event) {
    navigator.clipboard.writeText(event.target.innerText);
    console.log(event.target);
  }

  return (
    <>
      <Form addColor={addColor} hexCode={colors.value} colors={colors} />
      <ColorsEntry
        colors={colors}
        onDelete={handleDelete}
        onCopy={HandleCopy}
      />
    </>
  );
}

export default App;
