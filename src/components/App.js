import { useState, useEffect } from "react";
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

  function handleChangeColor(cardId, newColor) {
    const newCardList = cardList.map((card) =>
      card.id === cardId ? { ...card, colorCode: newColor } : card
    );
    setCardList(newCardList);
  }

  function handleDeleteCard(cardId) {
    const newCardList = cardList.filter((card) =>
      card.id !== cardId ? card : null
    );
    setCardList(newCardList);
  }

  // console.log(cardList);

  return (
    <>
      <header></header>
      <StyledMain>
        <Form onSubmit={handleAddColor} />
        <CardList
          cardList={cardList}
          onColorChange={handleChangeColor}
          onRemove={handleDeleteCard}
        />
      </StyledMain>
      <footer></footer>
    </>
  );
}

export default App;

const StyledMain = styled.main`
  margin: 0 auto;
`;
