import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { ReactComponent as Kakao } from '../assets/svg/login/kakao.svg';
import { ReactComponent as Naver } from '../assets/svg/login/naver.svg';
import { ReactComponent as Logo } from '../assets/svg/login_main.svg';
import Spacer from '../components/Spacer';
import Text from '../components/Text';
import UnStyleButton from '../components/UnStyleButton';

const Login = () => {
  const theme = useTheme();
  return (
    <Container>
      <Logo />
      <Spacer top={40} />
      <UnStyleButton>
        <ButtonWrapper>
          <LogoBox color="#FAE100">
            <Kakao />
          </LogoBox>
          <Text style={{ padding: '11px 66px' }} font={theme.typography.suit14r}>
            카카오 로그인
          </Text>
        </ButtonWrapper>
      </UnStyleButton>

      <Spacer top={10} />
      <UnStyleButton>
        <ButtonWrapper>
          <LogoBox color="#03C75A">
            <Naver />
          </LogoBox>
          <Text style={{ padding: '11px 66px' }} font={theme.typography.suit14r}>
            네이버 로그인
          </Text>
        </ButtonWrapper>
      </UnStyleButton>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.l1};
  border-radius: 8px;
`;

const LogoBox = styled.div<{ color: string }>`
  padding: 6px;
  background-color: ${(props) => props.color};
  border-radius: 8px 0px 0px 8px;
`;
