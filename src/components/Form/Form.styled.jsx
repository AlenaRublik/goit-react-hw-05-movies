import styled from '@emotion/styled';

export const StyledForm = styled.form`
display:flex;
justify-content: end;
  margin-bottom: 32px;
  margin-right: 83px;
`;

export const Field = styled.input`
  display: inline-block;
  padding: 8px;
  border-radius: 1px;
  width: 200px;
  font-family: inherit;
  font-size: 14px;
  transition: box-shadow 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    box-shadow: 3px 7px 5px 0px rgba(0,0,0,0.75);
  }
`;

export const Button = styled.button`
  padding: 8px;

  font-weight: 700;

  color: #ffffff;
  background-color: #e0228e;
  border: 1px solid #e0228e;
  transition: background-color 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    color 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    background-color: #dd72af;
    color: #ffffff
  }
`;

export const Span = styled.span`
  display: block;
  margin-top: 3px;
  color: #ffffff;
`;