import { useState } from "react";
import styled from "styled-components";
import { uid } from "uid";
import CardList from "./CardList";
import Form from "./Form";
import { COLORS } from "../utils/colorsDb";

function App() {
  const [cardList, setCardList] = useState(COLORS);

  function handleAddColor(newColor) {
    setCardList([
      { id: uid(), colorCode: newColor, colorName: "???" },
      ...cardList,
    ]);
  }

  // console.log(cardList);

  return (
    <>
      <header></header>
      <StyledMain>
        <Form onSubmit={handleAddColor} />
        <CardList cardList={cardList} />
      </StyledMain>
      <footer></footer>
    </>
  );
}

export default App;

const StyledMain = styled.main`
  margin: 0 auto;
`;
