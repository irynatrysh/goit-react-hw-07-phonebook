import styled from 'styled-components';

const ListItem = styled.li`
  width: 300px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
  margin-bottom: 8px;
`;
const Span = styled.span`
  width: 150px;
`;
const NumberSpan = styled.span`
  width: 100px;
`;

const Button = styled.button`
  /* width: 60px; */
  border-radius: 4px;
  border: 1px solid black;
`;

export { ListItem, Button, Span, NumberSpan };
