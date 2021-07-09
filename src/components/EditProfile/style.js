import styled from 'styled-components/macro';
import { queries } from 'shared/layout';
import { Button } from 'shared/components';

export const StyledForm = styled.form`
  width: 80%;
  max-width: 500px;
  margin: 0 auto;

  ${[queries.tiny]} {
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  margin-top: 15px;
`;

export const Label = styled.label`
  font-size: 1.25rem;
  color: white;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const SaveButton = styled(Button)`
  background-color: ${props => props.theme.colors.lightGreen};
  color: white;
  border-radius: 4vh;
`;

export const CancelButton = styled(Button)`
  background-color: ${props => props.theme.colors.lightPink};
  color: white;
  border-radius: 4vh;
`;
