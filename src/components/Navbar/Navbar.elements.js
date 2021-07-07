import styled from 'styled-components';
import { FaCentos } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #7FB6AC;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaCentos)`
  
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background:#E6F4F1;
  }
  `;

  export const NavItem = styled.li`
  height: 40px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #2E154A;;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-right:4.5rem;
   margin-bottom: 1.4rem;
    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled(Link)`
  color: #7FB6AC;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    color: #7B7693;
    font-size: 1.5rem;
    /* text-align: center; */
    padding: 2rem;
    /* margin-bottom: 8rem; */
    width: 100%;
    display: table;
    &:hover {
      color: #2E154A;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;