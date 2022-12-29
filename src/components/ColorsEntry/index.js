export default function ColorsEntry({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <li key={color.id}>
          <img src={color.value} alt="This is the color"></img>
        </li>
      ))}
    </ul>
  );
}
