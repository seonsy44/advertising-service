import React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <Style>{children}</Style>;
}

export default Container;

const Style = styled.div`
  width: 100%;
  padding: 40px;
  margin-top: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.bg_w};
`;
