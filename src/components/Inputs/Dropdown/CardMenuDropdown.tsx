import styled from '@emotion/styled';
import { ReactComponent as Delete } from '../../../assets/svg/delete.svg';
import { ReactComponent as Edit } from '../../../assets/svg/edit.svg';
import { ReactComponent as More } from '../../../assets/svg/more.svg';
import CardMenuPanel, { CardMenuItem } from './CardMenuPanel.tsx';
import { DropdownWrapper } from './Dropdown.tsx';
import { useToggle } from './useToggle.ts';

const CardMenuDropdown = () => {
  const { isActive, toggleActive } = useToggle();

  const CardMenuItems: CardMenuItem[] = [
    {
      text: '수정하기',
      Icon: Edit,
      onClick: () => {
        toggleActive();
      },
    },
    {
      text: '삭제하기',
      Icon: Delete,
      onClick: () => {
        toggleActive();
      },
    },
  ];

  return (
    <DropdownWrapper>
      <MoreIcon onClick={toggleActive} />
      {isActive && <CardMenuPanel items={CardMenuItems} />}
    </DropdownWrapper>
  );
};

export default CardMenuDropdown;

const MoreIcon = styled(More)`
  cursor: pointer;
`;
