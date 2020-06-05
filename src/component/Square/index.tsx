import React from "react";
import styled from "styled-components";

type Props = {
  color: string;
  text: string;
};

const Square: React.FC<Props> = ({ color, text }) => {
  return (
    <SquareBox className="Square" color={color}>
      {text}
    </SquareBox>
  );
};

const SquareBox = styled.div<{ color?: string }>`
  width: 158px;
  height: 158px;
  background-color: ${({ color }) => (color ? color : "blue")};
  color: white;
`;

export default Square;
