import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useClickOutside } from 'react-click-outside-hook'

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 54em;
  height: 3.8em;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0,0,0,0.14);
`;

const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding 2px 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border:none;
  font-size: 21px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchComponent = ({}) => {
  const [expanded, setExpanded ] = useState(false);
  const [parentRef, isClickedOutside ] = useClickOutside()

  const expandContainer = (state) => {
    setExpanded(state)
  }

  useEffect(() => {
    if(isClickedOutside) expandContainer(false)
  }, [isClickedOutside])

  return (
    <SearchBarContainer>
      <SearchInputContainer>
        <SearchInput
          placeholder = "Search for item"
          onFocus = {() => expandContainer(true)}
        />
      </SearchInputContainer>
    </SearchBarContainer>
  );
}


export default SearchComponent;
