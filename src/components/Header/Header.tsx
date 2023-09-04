import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Item } from './Item';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <Container>{children}</Container>;
};

Header.Item = Item;

export { Header };

const Container = styled.header`
  padding: 15px 22px;
  height: 24px;
  background: #5f27ff;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;
