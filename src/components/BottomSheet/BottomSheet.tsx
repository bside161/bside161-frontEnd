import { useState } from "react";
import styled from "@emotion/styled";

const BottomSheet = ({ isOpen }) => {
  return (
    <BottomSheetContainer isOpen={isOpen}>
      <Content>
        <p>This is the content of the bottom sheet.</p>
      </Content>
    </BottomSheetContainer>
  );
};
export default BottomSheet;

const BottomSheetContainer = styled.div<{isOpen: boolean}>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: ${(props) => (props.isOpen ? '50%' : '0')};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  border-radius: 14px;
`;

const Content = styled.div`
  padding: 20px;
`;
