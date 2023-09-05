import { useEffect, useState } from 'react';
import Button from '../components/Button.tsx';
import Checkbox, { checkboxOptions } from '../components/Inputs/Checkbox.tsx';
import Radio, { radioOptions } from '../components/Inputs/Radio.tsx';
import PopIdeaCard from '../components/Card/PopIdeaCard.tsx';
import IdeaCard from '../components/Card/IdeaCard.tsx';

const Components = () => {
  //라디오 예제
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

  //체크박스 예제
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

  //버튼예제
  const buttonClick = () => {
    console.log('button');
  };

  const ideas = [
    { id: 1, title: '제목입니다. 제목입니다. 제목입니다.', cateogry: 'IT' },
    { id: 2, title: '제목입니다. 제목입니다. 제목입니다.', cateogry: '디자인' },
    { id: 3, title: '제목입니다. 제목입니다. 제목입니다.', cateogry: '기획' },
    { id: 3, title: '제목입니다. 제목입니다. 제목입니다.', cateogry: '기획' },
    { id: 3, title: '제목입니다. 제목입니다. 제목입니다.', cateogry: '기획' },
    { id: 3, title: '제목입니다. 제목입니다. 제목입니다.', cateogry: '기획' },
  ];

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

      <div style={{ display: 'flex', flexWrap: 'nowrap', gap: 10, overflowX: 'scroll', overflowY:'hidden', paddingLeft: 22, paddingRight: 22 }}>
        {ideas.map(idea => {
          return <PopIdeaCard category={idea.cateogry} title={idea.title} />;
        })}
      </div>

      <div style={{ padding: 20}}>
          <IdeaCard />
      </div>
    </div>
  );
};

export default Components;
