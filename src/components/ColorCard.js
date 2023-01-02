import { useState } from "react";
import styled from "styled-components";

export default function ColorCard({ color, name }) {
  // const [clipText, setClipText] = useState("");

  function setClipText() {
    navigator.clipboard.writeText(color).then((text) => getClipText());
  }

  function getClipText() {
    navigator.clipboard.readText().then((text) => console.log(text));
  }

  return (
    <StyledCard color={color}>
      <StyledDeleteButton>X</StyledDeleteButton>
      <StyledTitle>{name}</StyledTitle>
      <StyledHexButton onClick={setClipText}>{color}</StyledHexButton>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 120px;
  min-height: 150px;
  background-color: ${({ color }) => color};
  border: 2px solid black;
  border-radius: 5px;
`;

const StyledTitle = styled.h2`
  font-size: 16px;
  margin: 0;
  text-align: center;
  color: black;
  padding: 50px 5px 20px;
`;

const Button = styled.button`
  border: 2px solid black;
`;

const StyledHexButton = styled(Button)`
  min-width: 50px;
  margin: 0 auto;
  padding: 5px 10px;
  border-radius: 5px;
`;

const StyledDeleteButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
  color: black;
  font-size: 12px;
  font-weight: 700;
  margin: 0;
  width: 25px;
  height: 25px;
  padding: 0;
  border-radius: 50%;
`;
