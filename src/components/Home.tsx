import styled from 'styled-components';

export const Home = ({ navbarHeight }: {
    navbarHeight: number;
}) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        font-size: 1.25rem;
        justify-content: center;
        margin: 0 auto;
        padding: ${navbarHeight + 40}px 0;
        transform: translateY(50%);
        width: 80%;
    `;

    return (
        <Container>
            Ξ X C O H E Г E N C E
        </Container>
    )
}