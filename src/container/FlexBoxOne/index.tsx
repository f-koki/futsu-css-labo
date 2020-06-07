import React from "react";
import Square from "../../component/Square";
import styled from "styled-components";

const FlexBoxOne: React.FC = () => {
  return (
    <StyledFlexBox className="FlexBoxOne">
      <Square color="red" text="1"></Square>
      <Square color="blue" text="2"></Square>
      <Square color="green" text="3"></Square>
      <Square color="purple" text="4"></Square>
      <Square color="black" text="5"></Square>
    </StyledFlexBox>
  );
};

const StyledFlexBox = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`;

export default FlexBoxOne;
