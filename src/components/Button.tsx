import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return <ButtonContainer type="button">{children}</ButtonContainer>;
}

export default Button;

const ButtonContainer = styled.button`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  color: white;
`;
