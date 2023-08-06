import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  max-width: 100%;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  margin: 0;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  padding: 28px;
  font-size: 26px;
  font-weight: 700;
`;

export const StyledNavLink = styled(NavLink)`
  color: #000000;
  &.active {
    color: #810103;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  text-decoration: none;
`;

export const Main = styled.main`
  max-width: 1440px;
`;