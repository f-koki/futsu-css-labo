import React from "react";
import styled from "styled-components";

const GridLayoutSpan: React.FC = () => {
  return (
    <StyledGridLayout className="GridLayoutSpan">
      <ItemA>A</ItemA>
      <ItemB>B</ItemB>
      <ItemC>C</ItemC>
      <ItemD>D</ItemD>
    </StyledGridLayout>
  );
};

const StyledGridLayout = styled.div`
  display: grid;
  grid-template-rows: 100px 50px 50px 200px;
  grid-template-columns: 150px 100px 150px 200px;
`;

const ItemA = styled.div`
  background-color: purple;
`;

const ItemB = styled.div`
  color: white;
  grid-row: span 2;
  background-color: blue;
`;

const ItemC = styled.div`
  background-color: yellow;
`;

const ItemD = styled.div`
  background-color: green;
  /* 入れる場所に移動する */
  /* grid-column: span 1;
  grid-column: span 2; */
  grid-column: span 3;
`;

export default GridLayoutSpan;
