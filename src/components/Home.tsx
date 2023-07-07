import { Fragment, useState } from 'react';
import styled from 'styled-components';

import art from '../art.json'

export const Home = ({ navbarHeight }: {
    navbarHeight: number;
}) => {
    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
        padding: ${navbarHeight + 20}px;
        width: 80%;
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
        margin: 20px;
        width: 250px;
    `

    const Img = styled.img`
        width: 250px;
        height: 300px;
        padding: 5px;
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