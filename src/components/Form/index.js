export default function Form({ addColor, hexCode, colors }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    addColor(data);

    // event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="colorpicker">
        <input name="colorpicker" type="color" id="colorpicker"></input>
      </label>
      <label htmlFor="hexCode">
        Type in your Hex Code or copy your choosen color
        <input
          type="text"
          name="hexCode"
          id="hexCode"
          placeholder={colors.colorpicker}
        >
          {colors.colorpicker}
        </input>{" "}
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
