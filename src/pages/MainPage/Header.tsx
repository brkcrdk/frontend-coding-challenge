import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, Input } from '../../components';
import { updateFilter } from '../../store/actions/filter';

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setValue] = useState('');

  useEffect(() => {
    dispatch(updateFilter(searchValue));
  }, [dispatch, searchValue]);

  return (
    <HeaderContainer>
      <Input
        placeholder="Search tournament..."
        value={searchValue}
        onChange={e => setValue(e.target.value)}
      />
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
