import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { ReactComponent as Back } from '../../assets/svg/back_24.svg';
import { ReactComponent as Default } from '../../assets/svg/default_profile.svg';
import { ReactComponent as Write } from '../../assets/svg/image_write.svg';
import { Header } from '../../components/Header/Header';
import Dropdown from '../../components/Inputs/Dropdown/Dropdown';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import Spacer from '../../components/Spacer';
import Text from '../../components/Text';
import UnStyleButton from '../../components/UnStyleButton';

const dropdownItems = [
  { value: '1', text: 'Dropdown item1 asdasddas' },
  { value: '2', text: 'Dropdown item2' },
];

const Setting = () => {
  const theme = useTheme();
  const [input, setInput] = useState('');

  const handleDropdownClick = (value: string) => {
    console.log(value);
  };

  return (
    <Container>
      <Header main emptyEnd>
        <Header.Item>
          <UnStyleButton>
            <Back />
          </UnStyleButton>
        </Header.Item>
        <Header.Item>
          <Text font={theme.typography.suit16sb} color={theme.colors.w1}>
            프로필 설정
          </Text>
        </Header.Item>
      </Header>
      <MainWrapper>
        이쪽이 바로 보여지는쪽
        <MainBox>
          {/* <Default /> */}
          <ImageWrapper>
            <ImageBox>
              <Img src="https://image.toast.com/aaaaaqx/catchtable/shopinfo/sR1B6qa4fT537GjL6KO9bHg/r1b6qa4ft537gjl6ko9bhg_2371016411290157.jpg?detail750" />
            </ImageBox>
            <ImageWrite>
              <Write />
            </ImageWrite>
          </ImageWrapper>
          <InputWithLabel
            label="닉네임"
            limit={10}
            value={input}
            placeholder="닉네임을 입력해주세요"
            isValid={true}
            message="테스트"
            hideMessage={true}
            onChange={(value) => setInput(value)}
          />
          <Spacer top={35} />
          <div style={{ display: 'flex', gap: 8 }}>
            <Dropdown onClick={handleDropdownClick} items={dropdownItems} initialValue={'대분류'} />
            <Dropdown onClick={handleDropdownClick} items={dropdownItems} initialValue={'상세분류'} />
            <Dropdown onClick={handleDropdownClick} items={dropdownItems} initialValue={'숙련도'} />
          </div>
        </MainBox>
      </MainWrapper>
    </Container>
  );
};

export default Setting;

const Container = styled.div``;

const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.c1};
  height: 100%;
`;

const MainBox = styled.section`
  background-color: ${(props) => props.theme.colors.w1};
  border-radius: 16px 16px 0 0;
  padding: 0 22px;
  margin-top: 75px;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  top: -50px;
  left: 0;
  right: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const ImageBox = styled.div`
  border-radius: 0 150px 150px 0;
  width: 100px;
  height: 100px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageWrite = styled.div`
  position: absolute;
  bottom: -8px;
  right: 0%;
  background: ${({ theme }) => theme.colors.w1};
  padding: 7px;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
`;
