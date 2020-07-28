import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    display: flex;
    width: 100%;
    height: 40px;
    padding: 20px;
    margin: 10px;
    font-style: italic;
    font-weight: 400;
    -webkit-box-shadow: 10px 10px 14px 0px rgb(0,0,0,0.13);
    -moz-box-shadow: 10px 10px 14px 0px rgba(0,0,0,0.13);
    box-shadow: 10px 10px 14px 0px rgba(0,0,0,0.13);
`

interface SearchProps {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    className?: string
}

const Search: React.FC<SearchProps> = (
    {
        placeholder,
        value,
        className,
        handleChange
    }) => {
    return (
        <SearchInput
            placeholder={placeholder}
            value={value}
            className={className}
            onChange={handleChange}
        />
    )
}

export default Search;
