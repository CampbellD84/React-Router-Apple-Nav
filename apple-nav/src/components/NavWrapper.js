import React from 'react';
import styled from 'styled-components';

import AppleLogoArea from './AppleLogo';
import SearchLogoArea from './SearchLogo';
import ShoppingLogoArea from './ShoppingLogoArea';

const HeadNav = styled.nav`
    background-color: #2d2d37;
    padding: 5px 20px; 
`; 

const MainProductsList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    list-style: none;
    li {
        color: #fff;
    }
`;

const NavWrapper = props => {
    return (
        <HeadNav>
            <MainProductsList>
            <AppleLogoArea />
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>TV</li>
                <li>Music</li>
                <li>Support</li>
                <SearchLogoArea />
                <ShoppingLogoArea />
            </MainProductsList>
        </HeadNav>
    );
}

export default NavWrapper;