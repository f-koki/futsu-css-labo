import React from "react";
import styled from "styled-components";

const GridLayoutAutoFlowDense: React.FC = () => {
  return (
    <StyledGridLayout className="GridLayoutAutoFlowDense">
      <ItemA>A</ItemA>
      <ItemB>B</ItemB>
      <ItemC>C</ItemC>
      <ItemD>D</ItemD>
    </StyledGridLayout>
  );
};

const StyledGridLayout = styled.div`
  display: grid;
  grid-template-rows: 100px 100px 100px 100px;
  grid-template-columns: 100px 100px 100px;
  /* Dが開いてるスペースに入る */
  grid-auto-flow: dense;
`;

const ItemA = styled.div`
  background-color: purple;
`;

const ItemB = styled.div`
  color: white;
  grid-row: span 2;
  grid-column: span 2;
  background-color: blue;
`;

const ItemC = styled.div`
  background-color: yellow;
  grid-row: span 2;
  grid-column: span 2;
`;

const ItemD = styled.div`
  background-color: green;
  /* 入れる場所に移動する */
  /* grid-column: span 1;
  grid-column: span 2; */
`;

export default GridLayoutAutoFlowDense;
