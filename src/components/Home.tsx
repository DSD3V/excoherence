import { Fragment, useState } from 'react';
import styled from 'styled-components';

import art from '../art.json'

export const Home = ({ navbarHeight }: {
    navbarHeight: number;
}) => {
    const Container = styled.div`
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: repeat(auto-fill, 275px);
        justify-content: center;
        margin: 0 auto;
        padding: ${navbarHeight + 20}px 0;
        width: 85%;
    `;

    const Description = styled.span`
        color: rgba(255, 255, 255, 0.7);
        padding: 10px;
        text-align: center;
    `

    const Div = styled.div`
        align-items: center;
        border: 1px solid rgba(250, 250, 250, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 275px;
    `

    const Img = styled.img`
        height: 300px;
        padding: 5px;
        width: 250px;
    `

    return (
        <Container>
            {art.map(({ description, image }, idx) =>
                <Div key={description}>
                    <Img src={ require("../images/" + image).default } />
                    <Description>{description}</Description>
                </Div>
            )}
        </Container>
    )
}