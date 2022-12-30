import styled from "styled-components";

export default function ColorsEntry({ colors, onDelete, onCopy }) {
  return (
    <ul>
      {colors.map((color) => (
        <li key={color.id}>
          <button type="button" onClick={() => onDelete(color.id)}>
            {" "}
            x{" "}
          </button>
          <Div style={{ backgroundColor: color.colorpicker }}>
            {" "}
            <button type="button" onClick={onCopy}>
              <P>{color.colorpicker}</P>
            </button>
          </Div>
        </li>
      ))}
    </ul>
  );
}

const Div = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  color: black;
  background: lightblue;
`;
