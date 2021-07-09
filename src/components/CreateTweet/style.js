import styled, { css } from 'styled-components/macro';
import { Button as UIButton } from 'shared/components';
import { DialogContent } from '@reach/dialog';

export const Header = styled.div`
  text-align: center;
`;

export const Title = styled.h3`
  padding: 15px 0;
  font-size: 1.25rem;
`;

export const StyledDialogContent = styled(DialogContent)`
  border-radius: 5px;
  width: 100%;
  max-width: 650px;
  position: relative;
  background-color:#757575;
  color: white;
  border: .1vh solid darkslategray;
`;

export const CloseButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.lightPink};
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  padding: 15px;
  font-size: 1.5rem;

  &:hover {
    color: ${(props) => props.theme.colors.red};
  }
`;

export const Content = styled.div`
  margin-top: 15px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Textarea = styled.textarea`
  border-radius: 5px;
  font-size: 15px;
  padding: 10px;
  width: 100%;
  border: 2px solid;
  color: white;
  background-color: #9E9E9E;
  min-height: 70px;
  resize: none;
  margin-top: 10px;
  outline: none;
  border: .1vh solid #7A7A7A;
`;

export const Button = styled(UIButton)`
  margin-top: 10px;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #26A69A;
      &:hover {
        background-color: #0097A7;
      }
    `}
`;
