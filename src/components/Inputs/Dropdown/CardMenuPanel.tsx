import styled from '@emotion/styled';
import { FC, SVGProps } from 'react';
import { PanelItem as originPanelItem, PanelWrapper as originPanelWrapper } from './Panel.tsx';

export interface CardMenuItem {
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

interface CardMenuPanelProps {
  items: CardMenuItem[];
}

const CardMenuPanel = ({ items }: CardMenuPanelProps) => {
  return (
    <PanelWrapper>
      {items.map(({ text, Icon }) => (
        <PanelItem key={text}>
          <span>{text}</span> <Icon />
        </PanelItem>
      ))}
    </PanelWrapper>
  );
};

export default CardMenuPanel;

const PanelWrapper = styled(originPanelWrapper)`
  left: auto;
  right: 0;
  transform: translateY(calc(100% + 7px));
`;

const PanelItem = styled(originPanelItem)`
  gap: 10px;
  line-height: normal;
`;
