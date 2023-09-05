import { useEffect, useState } from 'react';
import Button from '../components/Button.tsx';
import IdeaCard from '../components/Card/IdeaCard.tsx';
import PopIdeaCard from '../components/Card/PopIdeaCard.tsx';
import Checkbox, { checkboxOptions } from '../components/Inputs/Checkbox.tsx';
import InputWithLabel from '../components/Inputs/InputWithLabel.tsx';
import Radio, { radioOptions } from '../components/Inputs/Radio.tsx';

const Components = () => {
  //라디오
  const [selectedRadio, setSelectedRadio] = useState<string>('');
  const handleOptionChange = (value: string) => {
    setSelectedRadio(value);
  };

  const [radioOptions, setRadioOptions] = useState<radioOptions[] | []>([]);

  useEffect(() => {
    setRadioOptions([
      { text: '옵션 1', value: 'option1' },
      { text: '옵션 2', value: 'option2' },
      { text: '옵션 3', value: 'option3' },
    ]);
  }, []);

  //체크박스
  const [checkboxOptions, setCheckboxOptions] = useState<checkboxOptions[] | []>([]);

  const handleCheckboxChange = (value: string, newState: boolean) => {
    setCheckboxOptions((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) => (checkbox.value === value ? { ...checkbox, checked: !newState } : checkbox)),
    );
  };

  useEffect(() => {
    setCheckboxOptions([
      { text: '체크 1', value: 'check1', checked: false },
      { text: '체크 2', value: 'check2', checked: false },
      { text: '체크 3', value: 'check3', checked: false },
    ]);
  }, []);

  //버튼
  const buttonClick = () => {
    console.log('button');
  };

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

  //인풋 라벨
  const [inputText, setInputText] = useState('');
  const handleInputChange = (value: string) => {
    setInputText(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <Radio options={radioOptions} onChange={handleOptionChange} gap={'large'} />
        <p>선택한 옵션: {selectedRadio}</p>
      </div>

      <div>
        <Checkbox options={checkboxOptions} onChange={handleCheckboxChange} />
        <p>선택한 옵션: {checkboxOptions.map(({ text, checked }) => checked && text + ' ')}</p>
      </div>

      <div>
        <Button text={'버튼'} onClick={buttonClick} isActive={true} />
        <Button text={'버튼'} onClick={buttonClick} isActive={false} />
      </div>

      <div>
        <InputWithLabel
          label={'label'}
          limit={20}
          value={inputText}
          placeholder={'placeholder'}
          isValid={true}
          onChange={handleInputChange}
        />
        <InputWithLabel
          label={'label'}
          limit={20}
          value={inputText}
          placeholder={'placeholder'}
          isValid={false}
          onChange={handleInputChange}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          gap: 10,
          overflowX: 'scroll',
          overflowY: 'hidden',
          paddingLeft: 22,
          paddingRight: 22,
        }}
      >
        {ideas.map((idea, idx) => {
          return <PopIdeaCard key={idx} category={idea.category} title={idea.title} />;
        })}
      </div>

      <div style={{ padding: 20 }}>
        {Array.from({ length: 20 }, (_, idx) => (
          <IdeaCard key={idx} tags={tags} />
        ))}
      </div>
    </div>
  );
};

export default Components;
