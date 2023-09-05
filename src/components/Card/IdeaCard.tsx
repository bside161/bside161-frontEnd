import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { ReactComponent as Profile } from '../../assets/svg/default_profile.svg';
import { ReactComponent as Scrap } from '../../assets/svg/active_scrap.svg';
import { ReactComponent as UnScrap } from '../../assets/svg/scrap.svg';
// footer
import { ReactComponent as View } from '../../assets/svg/view_14.svg';
import { ReactComponent as Like } from '../../assets/svg/like_14.svg';
import { ReactComponent as ScrapView } from '../../assets/svg/scrap_14.svg';
import { ReactComponent as Comment } from '../../assets/svg/comment_14.svg';

const IdeaCard = () => {
  const theme = useTheme();
  return (
    <CardContainer>
      <ProfileWrapper>
        <ProfileBox>
          <Profile />
          <div>
            <span style={{ fontSize: 14, fontWeight: 500 }}>일이삼사오육칠팔구</span>
            <div style={{ fontSize: 12, fontWeight: 400, marginTop: 4, color: theme.b9 }}>스킬 | 작성시간</div>
          </div>
        </ProfileBox>
        <UnScrap />
      </ProfileWrapper>

      <ContentWrapper>
        <div style={{ fontSize: 14, color: theme.c1 }}>분야 / 분야 / 분야</div>
        <div style={{ fontSize: 16, fontWeight: 600 }}>20자 내외의 제목이 들어가는 영역입니다.</div>
        <div style={{ fontSize: 14, color: theme.b6 }}>
          3줄의 아이디어 내용이 들어가는 영역입니다. 3줄 이상부터는 말줄임표로 노출합니다. 3줄의 아이디어 내용이
          들어가는 영역입니다. 3줄 이상부터는 말줄임표로 노출합니다.
        </div>
        <div>태그 부분</div>
      </ContentWrapper>

      <FooterWrapper>
        <div style={{ display: 'flex', marginTop: 16 }}>
          <FooterText>
            <View />
            999+
          </FooterText>
          <FooterText>
            <Comment />
            999+
          </FooterText>
          <FooterText>
            <Like />
            999+
          </FooterText>
          <FooterText>
            <ScrapView />
            999+
          </FooterText>
        </div>
      </FooterWrapper>
    </CardContainer>
  );
};

export default IdeaCard;

const CardContainer = styled.div`
  padding: 30px 20px;
  border-radius: 8px;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.08);
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 20px 0;
`;

const FooterWrapper = styled.div``;

const FooterBox = styled.div``;

const FooterText = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${(props) => props.theme.b9};
  margin-right: 10px;
`;
