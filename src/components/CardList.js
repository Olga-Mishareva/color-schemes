import styled from "styled-components";
import StyledCard from "./ColorCard";
import { COLORS } from "../utils/colorsDb";

export default function CardList() {
  return (
    <StyledList>
      {COLORS.map((color) => {
        return (
          <StyledCard
            key={color.id}
            color={color.colorCode}
            name={color.colorName}
          />
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
`;
