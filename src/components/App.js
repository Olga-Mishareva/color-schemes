import styled from "styled-components";
import CardList from "./CardList";

function App() {
  return (
    <>
      <header></header>
      <StyledMain>
        <CardList />
      </StyledMain>
      <footer></footer>
    </>
  );
}

export default App;

const StyledMain = styled.main`
  margin: 0 auto;
`;
