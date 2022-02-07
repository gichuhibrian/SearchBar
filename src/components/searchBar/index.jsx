import React from 'react';
import styled from 'styled-components'

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 56em;
  height: 3.8em;
  background-color: red;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0,0,0,0.14);
`;
const SearchComponent = ({}) => {
  return (
    <SearchBarContainer>
      Test Style
    </SearchBarContainer>
  );
}


export default SearchComponent;
