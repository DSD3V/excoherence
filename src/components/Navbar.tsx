import styled from 'styled-components';

export const Navbar = ({ navbarHeight }: {
  navbarHeight: number;
}) => {
  const NavbarDiv = styled.nav`
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    height: ${navbarHeight}px;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 1;

    div:nth-child(2) {
      color: rgba(255, 255, 255, 0.4);
      font-size: 0.9rem;
      margin-top: 5px;
    }
  `;

  return (
    <NavbarDiv>
      Ξ X C O H E Г E N C E
    </NavbarDiv>
  )
}