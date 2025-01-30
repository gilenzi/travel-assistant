import styled from 'styled-components';

export const MenuToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 8px;

  box-shadow: ${({theme}) => theme.shadows.subtle};
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors.primaryHover};
  }
`;

export const Squares = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 7px);
  grid-gap: 3px;

  div {
    width: 8px;
    height: 8px;
    border-radius: 2px;
    border: 2px solid #fff;
  }
`;

export const Square = styled.div``;
