import styled, {css} from 'styled-components';

import {Link} from 'gatsby';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
    
    text-decoration: none;
    color: #F7F9FB;
    
`;


export const HeaderContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background-color: #8FC1E3;

    font-family: 'Open Sans Condensed';
    /*padding: 20px 60px;*/

    @media screen and (max-width: 800px){
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;

    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 100%;
    margin-left: 75px;
    display: flex;
    align-items: center;

    text-decoration: none;
    font-size: x-large;
    color: #F7F9FB;
    cursor: pointer;

    @media screen and (max-width: 800px){
        width: 50px;
        padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px){
        width: 80%;
    }
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;


