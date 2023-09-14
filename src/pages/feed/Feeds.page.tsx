import styled from '@emotion/styled';
import { Header } from '../../components/Header/Header';
import { ReactComponent as Filter } from '../../assets/svg/filter.svg';
import styled from '@emotion/styled';
import Text from '../../components/Text';
import { useTheme } from '@emotion/react';
import { ReactComponent as Write } from '../../assets/svg/writeicon40.svg';
import Spacer from '../../components/Spacer';
import PopCard from '../../components/Card/PopCard';
import IdeaCard from '../../components/Card/IdeaCard';

// 아이디어
const ideas = [
  { id: 1, title: '제목입니다. 제목입니다. 제목입니다.', category: 'IT' },
  { id: 2, title: '제목입니다. 제목입니다. 제목입니다.', category: '디자인' },
  { id: 3, title: '제목입니다. 제목입니다. 제목입니다.', category: '기획' },
  { id: 3, title: '제목입니다. 제목입니다. 제목입니다.', category: '기획' },
  { id: 3, title: '제목입니다. 제목입니다. 제목입니다.', category: '기획' },
  { id: 3, title: '제목입니다. 제목입니다. 제목입니다.', category: '기획' },
];

//태그
const tags = ['팀원모집', '팀원모집', '팀원모집', '팀원모집'];

const Feeds = () => {
  const theme = useTheme();
  return (
    <>
      <Header main>
        <Header.Item>
          <Text font={theme.typography.suit22r} color={theme.colors.w1}>
            CONCEPTBE
          </Text>
        </Header.Item>
        <Header.Item>
          <Filter />
        </Header.Item>
      </Header>
      <Wrapper>
        <FeedFixBox>
          <Write />
          <FeedFixTextWrapper>
            <Text font={theme.typography.suit22sb} color={theme.colors.w1}>
              일이삼사오육칠팔구십
            </Text>
            <Text font={theme.typography.suit22r} color={theme.colors.w1}>
              님,
            </Text>
          </FeedFixTextWrapper>
          <Text font={theme.typography.suit22r} color={theme.colors.w1}>
            재밌는 아이디어를 들려주세요!
          </Text>
          <Spacer top={10} />
          <Text font={theme.typography.suit15ra} color={theme.colors.w1}>{`아이디어 적으러 가기 >`}</Text>
        </FeedFixBox>
        <FeedBox>
          <Spacer top={16} />
          <FeedWrapper>
            <Text font={theme.typography.suit16sb}>현재 인기 있는 아이디어</Text>
            <Spacer top={18} />
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: 10,
                overflowX: 'scroll',
                overflowY: 'hidden',
              }}
            >
              {ideas.map((idea, idx) => {
                return <PopCard key={idx} category={idea.category} title={idea.title} />;
              })}
            </div>
          </FeedWrapper>
          <Spacer top={40} />
          <FeedWrapper>
            <Text font={theme.typography.suit16sb}>피드 영역 타이틀입니다</Text>
            <Spacer top={18} />
            {Array.from({ length: 20 }, (_, idx) => (
              <IdeaCard key={idx} tags={tags} />
            ))}
          </FeedWrapper>
        </FeedBox>
      </Wrapper>
    </>
  );
};

export default Feeds;

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.c1};
  height: 100%;
`;

const FeedFixBox = styled.div`
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${(props) => props.theme.colors.c1};
  color: ${(props) => props.theme.colors.w1};
`;

const FeedFixTextWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const FeedBox = styled.div`
  background-color: ${(props) => props.theme.colors.w1};
  border-radius: 16px 16px 0 0;
  padding: 29px 22px 50px 22px;
`;

const FeedWrapper = styled.div``;
