import styled from "styled-components";

export default function ColorsEntry({ colors, onDelete }) {
  // const colorBackground = colors.forEach(
  //   (color) => (style = { backgroundColor: { colors } })
  // );

  return (
    <ul>
      {colors.map((color) => (
        <li key={color.id}>
          <button type="button" onClick={() => onDelete(color.id)}>
            {" "}
            x{" "}
          </button>
          <Div style={{ backgroundColor: color.colorpicker }}></Div>
          <p>{color.colorpicker}</p>
        </li>
      ))}
    </ul>
  );
}

const Div = styled.div`
  width: 40px;
  height: 40px;
`;
