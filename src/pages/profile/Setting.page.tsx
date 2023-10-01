import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  ImageWrapper,
  ImageBox,
  Img,
  ImageWrite,
  SettingBox,
  SettingWrapper,
  MainBox,
  MainWrapper,
  BottomWrapper,
} from './Setting.style';
import { ReactComponent as Back } from '../../assets/svg/back_24_B.svg';
import { ReactComponent as Default } from '../../assets/svg/default_profile.svg';
import { ReactComponent as Write } from '../../assets/svg/image_write.svg';
import Button from '../../components/Button';
import { Header } from '../../components/Header/Header';
import Checkbox, { checkboxOptions } from '../../components/Inputs/Checkbox';
import Dropdown from '../../components/Inputs/Dropdown/Dropdown';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import Spacer from '../../components/Spacer';
import Text from '../../components/Text';
import UnStyleButton from '../../components/UnStyleButton';
import { skillOneDepth, skillTwoDepth, filterSubOptions, regionOptions } from '../../modules/constants';

const dropdownItems = [
  { value: '상', text: '상' },
  { value: '중', text: '중' },
  { value: '하', text: '하' },
];

const Setting = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [oneDepth, setOneDepth] = useState('');
  const [twoDepth, setTwoDepth] = useState('');
  const [purposeOptions, setPurposeOptions] = useState<checkboxOptions[] | []>([...filterSubOptions]); // 목적
  const [resion, setResion] = useState('');

  const handleDropdownClick = (value: string) => {
    console.log(value);
  };

  const handleCheckboxChange = (
    value: string,
    newState: boolean,
    setState: React.Dispatch<React.SetStateAction<checkboxOptions[]>>,
  ) => {
    setState((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) => (checkbox.value === value ? { ...checkbox, checked: !newState } : checkbox)),
    );
  };

  return (
    <Container>
      <Header main emptyEnd>
        <Header.Item>
          <UnStyleButton style={{ color: theme.colors.w1 }} onClick={() => navigate(-1)}>
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
        <div style={{ height: 20 }} />
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
          <SettingWrapper>
            <Text font={theme.typography.suit15m} color={theme.colors.b9}>
              스킬 (최대 3개)
            </Text>
            <SettingBox>
              <Dropdown onClick={(value) => setOneDepth(value)} items={skillOneDepth} initialValue={'대분류'} />
              <Dropdown
                onClick={(value) => setTwoDepth(value)}
                items={skillTwoDepth[`${oneDepth}`] || []}
                initialValue={'상세분류'}
              />
              <Dropdown onClick={handleDropdownClick} items={dropdownItems} initialValue={'숙련도'} />
            </SettingBox>
          </SettingWrapper>

          <Spacer top={35} />
          <SettingWrapper>
            <Text font={theme.typography.suit15m} color={theme.colors.b9}>
              목적 (최대 3개)
            </Text>
            <Checkbox options={purposeOptions} setState={setPurposeOptions} onChange={handleCheckboxChange} />
          </SettingWrapper>

          <Spacer top={35} />
          <SettingWrapper>
            <Text font={theme.typography.suit15m} color={theme.colors.b9}>
              지역
            </Text>
            <Dropdown onClick={(value) => setResion(value)} items={regionOptions} initialValue={'시/도/광역시'} />
          </SettingWrapper>

          <Spacer top={35} />
          <InputWithLabel
            label="직장명"
            limit={10}
            value={input}
            placeholder="직장명을 입력해주세요"
            isValid={true}
            message="테스트"
            hideMessage={true}
            onChange={(value) => setInput(value)}
          />

          <Spacer top={35} />
          <InputWithLabel
            multiline
            label="자기소개"
            limit={150}
            value={input}
            placeholder="자기소개를 입력해주세요"
            isValid
            hideMessage
            onChange={(value) => setInput(value)}
          />
        </MainBox>
        <BottomWrapper>
          <Button text="프로필 저장하기" onClick={() => {}} isActive={true} />
        </BottomWrapper>
      </MainWrapper>
    </Container>
  );
};

export default Setting;
