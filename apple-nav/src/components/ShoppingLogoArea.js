import React from 'react';
import styled from 'styled-components';

const ShoppingLogo = styled.div`
    height: 25px;
    width: 25px;
    i {
        height: 25px;
        width: 25px;
        color: #fff;
    }
`;

const ShoppingLogoArea = () => {
    return (
        <ShoppingLogo>
            <i className="fa fa-shopping-bag fa-lg" />
        </ShoppingLogo>
    );
}

export default ShoppingLogoArea;