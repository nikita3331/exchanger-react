import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 30px;
  border-top: 2px solid ${({ theme }) => theme.colors.gallery};
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gallery};
  padding: 20px;
`;
