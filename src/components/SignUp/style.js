import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const SignUpContainer = styled.div`
  max-width: 500px;
  margin: 10px auto;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Form = styled.form`
  margin-top: 15px;
  font-size: 16px;
`;

const Helper = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

const StyledLink = styled(Link)`
  margin: 0 10px;
`;

const ErrorMessage = styled.p`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.warning};
`;

export { SignUpContainer, Title, Form, Helper, StyledLink, ErrorMessage };
