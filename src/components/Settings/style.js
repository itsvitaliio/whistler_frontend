import styled from 'styled-components/macro';
import { Button } from 'shared/components';

export const Container = styled.div`
  width: 50%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Form = styled.form`
  width: 100%;
  margin: 15px 0;
  padding: 10px 15px;
`;

export const ChangePasswordButton = styled(Button)`
`;

export const EditProfileButton = styled(Button)`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  background-color: #A5D6A7;
  border-radius: 4vh;
`;

export const DeleteAccountButton = styled(Button)`
  background-color: ${props => props.theme.colors.lightPink};
  color: white;
  border-radius: 4vh;
`;

