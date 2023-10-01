import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState, ChangeEvent } from 'react';

import { ReactComponent as RadioChecked } from '../assets/svg/active_check.svg';
import { ReactComponent as Back } from '../assets/svg/back_24_B.svg';
import { ReactComponent as Check } from '../assets/svg/check_24.svg';
import { ReactComponent as UnCheck } from '../assets/svg/unCheck_24.svg';
import { ReactComponent as Xmark } from '../assets/svg/x.svg';
import BottomSheet from '../components/BottomSheet/BottomSheet';
import Divider from '../components/Divider';
import Spacer from '../components/Spacer';
import Tag from '../components/Tag';
import Text from '../components/Text';

const Write = () => {
  const theme = useTheme();
  const [getIndex, setIndex] = useState('');
  const [getBody, setBody] = useState('');
  const [bodyCount, setBodyCount] = useState(0);
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(true);

  const infoIndex = [
    { indexName: '분야', tag: ['IT', '게임', '제품', '유튜브컨텐츠', '영화', '웹툰'] },
    { indexName: '목적', tag: ['사이드 프로잭트', '창업', '크라우드편딩', '공모전', '스터디'] },
  ];
  const sheet_left = ['기획', '디자인', '개발', '데이터', '마케팅/영업', '미디어'];
  const sheet_right = ['게임디자인', '영상다지인', '시각디자인', '패션 디자인', '편집 디자인'];

  const handleIndexChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20) return;

    setIndex(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 2000) return;
    setBody(e.target.value);
    setBodyCount(e.target.value.length);
  };

  return (
    <MainWrapper>
      {/* 헤더 */}
      <HeaderBox>
        <Back />

        <Text font={theme.typography.suit16sb} color={theme.colors.b4}>
          글쓰기
        </Text>
        <Check />
      </HeaderBox>

      <Divider color={theme.colors.l3} />
      {/* 제목인풋 */}

      <HeaderInput placeholder="제목을 입력해 주세요 (최대20자)" value={getIndex} onChange={handleIndexChange} />

      <Divider color={theme.colors.l3} />
      {/* 내용인풋 */}
      <div>
        <BodyTextarea placeholder="내용을 작성해주세요 (최대 2000자)" value={getBody} onChange={handleBodyChange} />

        <TextareaCountBox>
          <Text font={theme.typography.suit15m} color={theme.colors.c1}>
            {bodyCount}
          </Text>
          /2,000
        </TextareaCountBox>
      </div>
      <Divider color={theme.colors.bg1} height={8} bottom={30} />
      <BottomWrapper>
        {infoIndex.map((item, idx) => {
          return (
            <div key={idx + 'tag'}>
              <Text required font={theme.typography.suit14m} color={theme.colors.b9}>
                {item.indexName}
              </Text>
              <Spacer top={12} />
              <Tag
                tags={item.tag}
                style={{
                  color: 'black',
                  border: '1px solid rgba(0, 0, 0, 0.10)',
                  padding: '12px 16px',

                  backgroundColor: 'white',
                }}
              />
            </div>
          );
        })}
      </BottomWrapper>
      <button
        onClick={() => {
          setIsOpenBottomSheet(true);
        }}
      ></button>
      <BottomSheet isOpen={isOpenBottomSheet} onClose={() => setIsOpenBottomSheet(false)}>
        <Sheet_TopBox>
          <Xmark />
          <Text font={theme.typography.suit16sb} color={theme.colors.b4}>
            팀원선택
          </Text>
          <Check
            onClick={() => {
              setIsOpenBottomSheet(false);
            }}
          />
        </Sheet_TopBox>
        <Sheet_BodyBox>
          <Sheet_Left>
            {sheet_left.map((e, index) => {
              return (
                <Sheet_leftItem key={index}>
                  <Text font={theme.typography.suit14m} color={theme.colors.ba}>
                    {e}
                  </Text>
                </Sheet_leftItem>
              );
            })}
          </Sheet_Left>
          <Sheet_right>
            {sheet_right.map((e, index) => {
              return (
                <Sheet_radioDiv key={index}>
                  <Sheet_radioLabel>
                    <Text font={theme.typography.suit14m} color={theme.colors.b4}>
                      {e}
                    </Text>
                  </Sheet_radioLabel>
                  <Sheet_radioInput type="radio" id={e} name="testRadio" value={e} checked />
                  <RadioChecked />
                </Sheet_radioDiv>
              );
            })}
          </Sheet_right>
        </Sheet_BodyBox>
      </BottomSheet>
    </MainWrapper>
  );
};

export default Write;

const MainWrapper = styled.div`
  width: 100%;
`;

const HeaderBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  padding: 0 22px;
`;

const HeaderInput = styled.input`
  width: 100%;

  border: none;
  padding: 20px;
  outline: none;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.b4};

  &:focus {
    ::placeholder {
      color: transparent;
    }
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.ba};
  }
`;

const BodyTextarea = styled.textarea`
  width: 100%;
  overflow: auto;
  height: 190px;
  border: none;
  padding: 20px 22px 25px 22px;
  outline: none;
  font-size: 15px;
  font-weight: 400;
  resize: none;
  color: ${(props) => props.theme.colors.b4};

  ::placeholder {
    color: ${(props) => props.theme.colors.ba};
  }
  &:focus {
    ::placeholder {
      color: transparent;
    }
  }
`;

const TextareaCountBox = styled.div`
  display: flex;
  justify-content: end;
  padding: 0px 22px 25px 22px;
  color: ${(props) => props.theme.colors.b9};
  font-size: 15px;
  font-weight: 500;
`;

const BottomWrapper = styled.div`
  padding: 0px 22px;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const Sheet_TopBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  padding: 0 22px;
`;
const Sheet_BodyBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Sheet_Left = styled.div`
  width: 38%;
`;

const Sheet_leftItem = styled.div`
  padding: 10px 22px;
  background-color: ${(props) => props.theme.colors.bg1};
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  height: 34px;
`;
const Sheet_right = styled.div`
  width: 62%;
  box-sizing: border-box;
  padding: 0 22px;
`;

const Sheet_radioDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 54px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const Sheet_radioLabel = styled.label`
  width: 100%;
  background-image: url(RadioChecked);
  background-repeat: no-repeat;
  background-position: 0 50%;
  cursor: pointer;
`;
const Sheet_radioInput = styled.input`
  display: none;
`;
