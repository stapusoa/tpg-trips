import React, { useState } from 'react';
import styled from 'styled-components';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';import './textField.css';
import '../../styles/colors.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 4px;
  padding-left: 16px;
  color: var(--grey700);
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-content: center;
`;

const Icon = styled(EmailOutlinedIcon)`
  color: var(--canyon300-color);
  position: absolute;
  align-content: center;
  justify-content: center;
  padding: 8px 16px;
  height: 16px;
  fontsize: small;
`;

const ClearIcon = styled(ClearRoundedIcon)`
  color: var(--canyon300-color);
  padding: 8px 16px;
  position: absolute;
  right: 8px;

`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  border: 1px solid var(--grey300);
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  padding: 8px 40px 8px 40px;
  background-color: white;
  color: var(--grey700);
  &:focus {
    border-radius: 30px;
    border: 1px solid var(--canyon300-color);
    padding: 8px 40px 8px 40px;
  }
`;

const CustomTextField = ({ label, defaultText, ...rest }) => {
  const [text, setText] = useState('');

  const handleClear = () => {
    setText('');
  };
  
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputContainer>
        <Icon fontSize="small"/>
        <Input 
          {...rest}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setText('')} 
        />
        {text && <ClearIcon fontSize="small" onClick={handleClear} />}
        
      </InputContainer>
    </Container>
  );
};

export default CustomTextField;
