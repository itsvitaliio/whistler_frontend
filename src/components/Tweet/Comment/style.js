import styled from 'styled-components/macro';
import { Input } from 'shared/components';

export const CommentContainer = styled.div`
  background-color: #757575;
  width: 100%;
  min-height: 50px;
  max-height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-top: 1px solid #cadae4;
  border-bottom: 1px solid #cadae4;
`;

export const CommentForm = styled.form`
  background-color: transparent;
  flex: 1;
`;

export const CommentInput = styled(Input)`
  height: 35px;
  flex: 1;
  border-radius: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;

    
  &::-webkit-input-placeholder {
    color: white;
  }
`;
