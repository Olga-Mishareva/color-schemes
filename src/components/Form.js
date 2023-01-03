import { useState } from "react";
import styled from "styled-components";

export default function Form({ onSubmit }) {
  const [hexColor, setHexColor] = useState("#FF6E4A");

  function handleInputChange(e) {
    setHexColor(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(e.target.hex.value);
  }

  return (
    <StyledForm
      onSubmit={handleSubmit}
      color={hexColor.includes("#") ? hexColor : "#FF6E4A"}
    >
      <StyledColorInput
        onChange={handleInputChange}
        type="color"
        name="color"
        value={hexColor}
      />
      <StyledHexInput
        onChange={handleInputChange}
        type="text"
        name="hex"
        value={hexColor}
      />
      <StyledSubmitButton type="submit">ADD</StyledSubmitButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 150px;
  height: 140px;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 5px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ color }) => color};
`;

const Input = styled.input`
  padding: 0;
  border: 2px solid black;
  border-radius: 5px;
`;

const StyledColorInput = styled(Input)`
  margin: 20px 0 10px;
  width: 100px;
`;

const StyledHexInput = styled(Input)`
  margin-bottom: 10px;
  width: 88px;
  padding: 4px;
  text-align: center;
  font-weight: 700;
`;

const StyledSubmitButton = styled.button`
  width: 100px;
  height: 27px;
  border: 2px solid black;
  border-radius: 5px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    background-color: #dddde9;
  }
`;
