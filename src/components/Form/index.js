export default function Form({ value, addColor }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    addColor(data);

    event.target.reset();
    event.target.colorpicker.focus();
  }
  return (
    <form>
      <label htmlFor="colorpicker">
        <input
          name="colorpicker"
          type="color"
          id="colorpicker"
          value={value}
        ></input>
      </label>
      <p>{value}</p>
      <button type="submit" onClick={handleSubmit}></button>
    </form>
  );
}
