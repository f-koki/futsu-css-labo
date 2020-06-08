import React from "react";
import Square from "../../component/Square";
import styled from "styled-components";

const FlexBox05: React.FC = () => {
  return (
    <StyledFlexBox className="FlexBox05">
      <Square color="red" text="1"></Square>
      <Square color="blue" text="2"></Square>
      <Square color="green" text="3"></Square>
      <Square color="purple" text="4"></Square>
      <Square color="black" text="5"></Square>
      <Square color="red" text="6"></Square>
      <Square color="blue" text="7"></Square>
      <Square color="green" text="8"></Square>
    </StyledFlexBox>
  );
};

const StyledFlexBox = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export default FlexBox05;
