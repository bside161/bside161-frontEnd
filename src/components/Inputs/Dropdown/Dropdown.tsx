import styled from '@emotion/styled';
import { useState } from 'react';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow.svg';
import Panel, { Item } from './Panel.tsx';
import { useToggle } from './useToggle.ts';

interface DropdownProps {
  items: Item[];
  initialValue: string;
  onClick: (value: string) => void;
}

const Dropdown = ({ items, initialValue, onClick }: DropdownProps) => {
  const { isActive, toggleActive } = useToggle();
  const [selectedText, setSelectedText] = useState(initialValue);

  return (
    <DropdownWrapper>
      <Trigger onClick={toggleActive}>
        {selectedText} <ArrowIcon isActive={isActive} />
      </Trigger>
      {isActive && (
        <Panel onClick={onClick} toggleActive={toggleActive} setSelectedText={setSelectedText} items={items} />
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;

export const DropdownWrapper = styled.div`
  position: relative;
`;

const ArrowIcon = styled(Arrow)<{ isActive: boolean }>`
  transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0)')};
`;

const Trigger = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 15px 12px;
  font-size: 14px;
  font-weight: 500;
  box-sizing: border-box;
  gap: 10px;
  color: ${({ theme }) => theme.colors.b4};
  border: 1px solid ${({ theme }) => theme.colors.l2};
  border-radius: 6px;
  
  cursor: pointer;
`;
