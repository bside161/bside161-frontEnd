import React from 'react';

export default function TestPage() {
  return (
    <div>
      Test.page
      {Array(100)
        .fill()
        .map((arr) => {
          return <div>테스트</div>;
        })}
    </div>
  );
}
