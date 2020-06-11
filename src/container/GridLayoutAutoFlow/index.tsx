import React from "react";
import styled from "styled-components";

const GridLayoutAutoFlow: React.FC = () => {
  return (
    <StyledGridLayout className="GridLayoutAutoFlow">
      <ItemA>A</ItemA>
      <ItemB>B</ItemB>
      <ItemC>C</ItemC>
      <ItemD>D</ItemD>
      <ItemE>E</ItemE>
    </StyledGridLayout>
  );
};

const StyledGridLayout = styled.div`
  display: grid;
  grid-template-rows: 100px 100px;
  grid-template-columns: 150px 100px 1fr 2fr;
  grid-auto-flow: column;
`;

const ItemA = styled.div`
  background-color: purple;
`;

const ItemB = styled.div`
  color: white;
  background-color: blue;
`;

const ItemC = styled.div`
  background-color: yellow;
`;

const ItemD = styled.div`
  background-color: green;
`;

const ItemE = styled.div`
  background-color: red;
`;

export default GridLayoutAutoFlow;
