import React from "react";
import Square from "../../component/Square";
import styled from "styled-components";

const FlexBoxOne: React.FC = () => {
  return (
    <StyledFlexBox className="FlexBoxOne">
      <Square1 color="red" text="1" />
      <Square2 color="green" text="2" />
      <Square3 color="blue" text="3" />
      <Square4 color="black" text="4" />
      <Square5 color="purple" text="5" />
    </StyledFlexBox>
  );
};

const StyledFlexBox = styled.div`
  display: flex;
  flex-flow: row;
`;

const Square1 = styled(Square)`
  flex-grow: 1;
`;
const Square2 = styled(Square)`
  flex-grow: 2;
`;
const Square3 = styled(Square)`
  flex-grow: 1;
`;
const Square4 = styled(Square)`
  flex-grow: 2;
`;
const Square5 = styled(Square)`
  flex-grow: 1;
`;

export default FlexBoxOne;
