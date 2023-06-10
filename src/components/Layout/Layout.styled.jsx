import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 10px;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content:end;
  margin-right: 83px;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;


  &.active {
    font-weight: 500;
    font-size: 20px;
    color: #e0228e;;
  }
`;