import { ReactNode } from 'react';

interface HeaderItemProps {
  children: ReactNode;
}

export const Item = ({ children }: HeaderItemProps) => {
  return <div>{children}</div>;
};
