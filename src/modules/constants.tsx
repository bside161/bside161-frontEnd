const memberSelect = [
  { text: '기획', value: '기획' },
  { text: '디자인', value: '디자인' },
  { text: '개발', value: '개발' },
  { text: '데이터', value: '데이터' },
  { text: '마케팅/영업', value: '마케팅/영업' },
  { text: '미디어', value: '미디어' },
];

const memberSelectDetails = [
  {
    parent: '기획',
    options: [
      { text: 'IT 기획', value: 'IT기획', checked: false },
      { text: '게임 기획', value: '게임기획', checked: false },
      { text: '제품 기획', value: '제품기획', checked: false },
      { text: '사업 기획', value: '사업기획', checked: false },
    ],
  },
  {
    parent: '디자인',
    options: [
      { text: 'UIUX', value: 'UIUX', checked: false },
      { text: '게임 디자인', value: '게임 디자인', checked: false },
      { text: '영상 디자인', value: '영상 디자인', checked: false },
      { text: '제품 디자인', value: '제품 디자인', checked: false },
      { text: '시각 디자인', value: '시각 디자인', checked: false },
      { text: '패션 디자인', value: '패션 디자인', checked: false },
      { text: '편집 디자인', value: '편집 디자인', checked: false },
      { text: '브랜딩 디자인', value: '브랜딩 디자인', checked: false },
      { text: '캐릭터/일러스트', value: '캐릭터/일러스트', checked: false },
    ],
  },
  {
    parent: '개발',
    options: [
      { text: 'BE', value: 'BE', checked: false },
      { text: 'FE', value: 'FE', checked: false },
      { text: 'AOS', value: 'AOS', checked: false },
      { text: 'IOS', value: 'IOS', checked: false },
    ],
  },
];

const modaloptions = [
  {
    text: '기획',
    value: '기획',
    options: [
      { text: 'IT 기획', value: 'IT기획', checked: false },
      { text: '게임 기획', value: '게임기획', checked: false },
      { text: '제품 기획', value: '제품기획', checked: false },
      { text: '사업 기획', value: '사업기획', checked: false },
    ],
  },
  {
    text: '디자인',
    value: '디자인',
    options: [
      { text: 'IT 기획', value: 'IT기획', checked: false },
      { text: '게임 기획', value: '게임기획', checked: false },
      { text: '제품 기획', value: '제품기획', checked: false },
      { text: '사업 기획', value: '사업기획', checked: false },
    ],
  },
  {
    text: '개발',
    value: '개발',
    options: [
      { text: 'BE', value: 'BE', checked: false },
      { text: 'FE', value: 'FE', checked: false },
      { text: 'AOS', value: 'AOS', checked: false },
      { text: 'IOS', value: 'IOS', checked: false },
    ],
  },
];

export { memberSelect, memberSelectDetails };
