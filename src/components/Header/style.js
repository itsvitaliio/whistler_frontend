import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: #616161;
  color: white;
`;

export const ProfilesLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  margin: 0 10px;
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Logo = styled.i`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};
  padding: 7px 12px;
  display: block;
`;
