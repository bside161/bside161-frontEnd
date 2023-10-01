import styled from '@emotion/styled';
import { ReactNode, CSSProperties } from 'react';

interface TextProps {
  children: ReactNode;
  font: CSSProperties;
  style?: CSSProperties;
  color?: string;
}

const Text = ({ children, font, color, style }: TextProps) => {
  return (
    <TextBox color={color} style={{ ...font, ...style }}>
      {children}
    </TextBox>
  );
};

export default Text;

const TextBox = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.b)};
  user-select: none;
`;
