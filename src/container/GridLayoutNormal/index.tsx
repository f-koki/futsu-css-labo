import React from "react";
import Square from "../../component/Square";
import styled from "styled-components";

const GridLayoutNormal: React.FC = () => {
  return (
    <StyledGridLayout className="GridLayoutNormal">
      <ItemA>A</ItemA>
      <ItemB>B</ItemB>
      <ItemC>C</ItemC>
    </StyledGridLayout>
  );
};

const StyledGridLayout = styled.div`
  display: grid;
  grid-template-rows: 100px 50px 50px;
  grid-template-columns: 150px 150px 150px;
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

export default GridLayoutNormal;
