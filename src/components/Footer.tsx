import styled from 'styled-components';

export const Footer = ({ navbarHeight }: {
  navbarHeight: number;
}) => {
  const FooterDiv = styled.nav`
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    bottom: 0;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    height: ${navbarHeight}px;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 1;
  `;

  return (
    <FooterDiv>ex@excoherence.com</FooterDiv>
  )
}