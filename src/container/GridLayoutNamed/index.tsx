import React from "react";
import styled from "styled-components";

const GridLayoutNamed: React.FC = () => {
  return (
    <StyledGridLayout className="GridLayoutNamed">
      <ItemA>A</ItemA>
      <ItemB>B</ItemB>
      <ItemC>C</ItemC>
    </StyledGridLayout>
  );
};

const StyledGridLayout = styled.div`
  display: grid;
  grid-template-rows: 100px 50px 50px;
  grid-template-columns: 150px 100px 150px;
  grid-template-areas:
    "Header Header Header"
    "Nav    Body   Body"
    "Nav    Body   Body";
`;

const ItemA = styled.div`
  grid-area: Header;
  background-color: purple;
`;

const ItemB = styled.div`
  color: white;
  grid-area: Nav;
  background-color: blue;
`;

const ItemC = styled.div`
  grid-area: Body;
  background-color: yellow;
`;

export default GridLayoutNamed;
