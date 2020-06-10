import React from "react";
import styled from "styled-components";

const GridLayoutNormal: React.FC = () => {
  return (
    <StyledGridLayout className="GridLayoutNormal">
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
  grid-row: 1/2;
  grid-column: 3/4;
  background-color: purple;
`;

const ItemB = styled.div`
  color: white;
  grid-row: 2;
  grid-column: 2;
  background-color: blue;
`;

const ItemC = styled.div`
  grid-row: 3/4;
  grid-column: 1/4;
  background-color: yellow;
`;

const ItemD = styled.div`
  grid-row: 4;
  grid-column: 2 / span 3;
  background-color: green;
`;

export default GridLayoutNormal;
