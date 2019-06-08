import React from 'react';
import styled from 'styled-components';

const SearchLogo = styled.div`
    height: 25px;
    width: 25px;
    i {
        height: 25px;
        width: 25px;
        color: #fff;
    }
`;

const SearchLogoArea = () => {
    return (
        <SearchLogo>
            <i className="fa fa-search fa-lg"/>
        </SearchLogo>
    );
}

export default SearchLogoArea;