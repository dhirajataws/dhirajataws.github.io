import * as React from 'react';
import styled from 'styled-components';
import { ImageContainer, FooterContainer } from '.';
import logo from '../../logo.png';
import tile from '../../tile.jpg';

export const Text = styled.div`
display:flex;
align-self:center;
font-size:5vmin;
color:white;
`
export const LogoImg = styled.img`
align-self:center;
width:15%;
height:80%;
z-index:3;
`;

const ShowImage = (props) => {
    return (
        <ImageContainer {...props.specs}>
            {props.children}
            <FooterContainer><LogoImg src={logo} /><Text>Home and Away</Text></FooterContainer>
        </ImageContainer>
    )
}

export const addLogoName = (values) => (Component) => <ShowImage specs={values}><Component src={tile} /></ShowImage>
