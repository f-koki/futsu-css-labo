import React from "react";
import styled from "styled-components";

type Props = {
  color: string;
};

const Square: React.FC<Props> = ({ color }) => {
  return (
    <SquareBox className="Square" color={color}>
      hoge
    </SquareBox>
  );
};

const SquareBox = styled.div<{ color?: string }>`
  width: 64px;
  height: 64px;
  background-color: ${({ color }) => (color ? color : "blue")};
`;

export default Square;
