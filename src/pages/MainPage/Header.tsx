import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../components';

const Header = () => {
  return (
    <HeaderContainer>
      <Input placeholder="Search tournament..." />
      <Button>CREATE TOURNAMENT</Button>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
