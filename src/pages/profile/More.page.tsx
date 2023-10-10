import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Back } from '../../assets/svg/back_24_B.svg';
import Divider from '../../components/Divider';
import { Header } from '../../components/Header/Header';
import Spacer from '../../components/Spacer';
import Text from '../../components/Text';
import UnStyleButton from '../../components/UnStyleButton';

const More = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Container>
      <Header emptyEnd>
        <Header.Item>
          <UnStyleButton style={{ color: theme.colors.b4 }} onClick={() => navigate(-1)}>
            <Back />
          </UnStyleButton>
        </Header.Item>
        <Header.Item>
          <Text font={theme.typography.suit16sb} color={theme.colors.b4}>
            더보기
          </Text>
        </Header.Item>
      </Header>

      <MainWrapper>
        <MoreButton>
          <Text font={theme.typography.suit15m}>로그인/회원가입</Text>
        </MoreButton>
        <Divider color={theme.colors.l3} top={22} bottom={22} />

        <MoreButton>
          <Text font={theme.typography.suit15m}>이용약관</Text>
        </MoreButton>
        <Divider color={theme.colors.l3} top={22} bottom={22} />

        <MoreButton>
          <Text font={theme.typography.suit15m}>개인정보처리방침</Text>
        </MoreButton>
        <Divider color={theme.colors.l3} top={22} bottom={22} />

        <Text font={theme.typography.suit15m}>기타 문의 사항</Text>

        <Spacer top={8} />
        <Text font={theme.typography.suit14r} color={theme.colors.b6}>
          기타 문의사항이 있으실 경우, ABCDEFG123456@gmail.com으로 연락주세요
        </Text>

        <Divider color={theme.colors.l3} top={22} bottom={22} />
        <MoreButton>
          <Text font={theme.typography.suit15m} color={theme.colors.ba}>
            회원탈퇴
          </Text>
        </MoreButton>
      </MainWrapper>
    </Container>
  );
};

export default More;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* height: calc(var(--vh, 1vh) * 100); */
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg1};
`;

const MainWrapper = styled.section`
  /* background-color: ${({ theme }) => theme.colors.bg1}; */
  /* height: 100svh; */
  padding: 84px 30px 0 30px;
  overflow: hidden;
`;

const MoreButton = styled(UnStyleButton)`
  width: 100%;
  text-align: left;
`;
