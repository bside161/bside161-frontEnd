import styled from '@emotion/styled';

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
  padding-bottom: 40px;
`;

const SettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const SettingBox = styled.div`
  display: flex;
  gap: 8px;
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

const BottomWrapper = styled.div`
  padding: 0 22px 22px 34px;
  background: ${({ theme }) => theme.colors.w1};
`;

export {
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
};
