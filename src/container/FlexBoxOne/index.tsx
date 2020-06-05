import React from "react";
import Square from "../../component/Square";
import styled from "styled-components";

const FlexBoxOne: React.FC = () => {
  return (
    <StyledFlexBox className="FlexBoxOne">
      <Square color="red" text="1" />
      <Square color="green" text="2" />
      <Square color="blue" text="3" />
    </StyledFlexBox>
  );
};

const StyledFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
`;

export default FlexBoxOne;
