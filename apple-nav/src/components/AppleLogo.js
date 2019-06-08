import React from 'react';
import styled from 'styled-components';
import Logo from '../images/Apple_logo_white.svg';

const AppleLogo = styled.div`
    height: 25px;
    width: 25px;
    img {
        height: 25px;
        width: 25px;
    }
`;

const AppleLogoArea = () => {
    return (
        <AppleLogo>
            <img src={Logo} alt="Company Logo"/>
        </AppleLogo>
    );
}

export default AppleLogoArea;