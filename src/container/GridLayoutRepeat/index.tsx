import React from "react";
import styled from "styled-components";

const GridLayoutRepeat: React.FC = () => {
  return (
    <StyledGridLayout className="GridLayoutRepeat">
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
  /* grid-template-rows: 100px 50px 100px 50px 200px; */
  grid-template-rows: repeat(2, 100px 50px) 200px;
  grid-template-columns: 100px;
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

export default GridLayoutRepeat;
