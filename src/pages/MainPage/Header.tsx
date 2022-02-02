import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useDebounce } from 'usehooks-ts';
import { Button, Input } from '../../components';
import { updateFilter } from '../../store/actions/filter';
import { addNewTournament } from '../../store/actions/tournaments';
import { createTournament } from '../../requests/createTournament';

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(updateFilter(debouncedValue));
  }, [dispatch, debouncedValue]);

  const handleAddTournament = async () => {
    const tournamentName = prompt('New Tournament Name:');
    if (tournamentName) {
      const newTournament = await createTournament(tournamentName);
      dispatch(addNewTournament(newTournament));
    }
  };

  return (
    <HeaderContainer>
      <Input
        placeholder="Search tournament..."
        value={searchValue}
        onChange={e => setValue(e.target.value)}
      />
      <Button onClick={handleAddTournament}>CREATE TOURNAMENT</Button>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
