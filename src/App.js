import Form from "./components/Form";
import ColorsEntry from "./components/ColorsEntry";

import { useEffect, useState } from "react";

// const url = "https://www.thecolorapi.com/id?hex=<hexcode here>";

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

  return (
    <>
      <Form addColor={addColor} hexCode={colors.value} />
      <ColorsEntry colors={colors} onDelete={handleDelete} />
    </>
  );
}

export default App;
