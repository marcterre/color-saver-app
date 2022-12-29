export default function Form({ addColor, hexCode }) {
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
      <p>{hexCode}</p>
      <button type="submit">Log</button>
    </form>
  );
}
