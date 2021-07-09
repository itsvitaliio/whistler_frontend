import { queries } from 'shared/layout';
import styled from 'styled-components/macro';

export const Container = styled.li`
  flex: 0 1 1;
  padding: 10px;
  color: white;

  ${queries.phone} {
    flex: 0 1 50%;
  }

  ${queries.desktop} {
    flex: 0 1 33%;
  }
`;

export const FlexContainer = styled.div`
  padding: 10px 15px;
  border: 1px solid #757575;
  border-radius: 5px;
  height: 100%;
  display: flex;
`;

export const TextContainer = styled.div`
  margin: 0.7em;
  display: flex;
  flex-direction: column;
`;

export const StyledName = styled.p`
  font-weight: bold;
`;

export const StyledUsername = styled.p`
  color: ${(props) => props.theme.colors.white};
`;
