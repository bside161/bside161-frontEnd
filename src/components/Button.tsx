import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../styles/theme.ts';

interface ButtonProps {
  text: string;
  onClick: () => void;
  isActive: boolean;
  style?: React.CSSProperties;
}
const Button = ({ text, onClick, isActive, style }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} style={style} isActive={isActive}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? colors.c1 : colors.bg1)};
  color: ${({ isActive }) => (isActive ? colors.w1 : colors.b)};
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  padding: 17px 28px;
  cursor: pointer;
`;
