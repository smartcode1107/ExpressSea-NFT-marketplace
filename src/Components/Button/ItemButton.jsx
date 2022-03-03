import React from "react";
import styled from "styled-components";
const ButtonStyled = styled.button`
  font-size: 0.9rem;
  padding: 0.25rem 0.85rem;
  border-radius: 9px 0 9px 0px;
  border-color: transparent;
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  max-width: 200px;
  svg {
    width: 1.2rem;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    font-size: 0.7rem;
    padding: 0.15rem 0.55rem;
  }
`;
const ItemButton = ({ name, bgColor, color }) => {
  return (
    <ButtonStyled>
      {name}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        // class="w-5 ml-1.25 transition-transform duration-75 transform group-hover:translate-x-0.5 flex-shrink-0"
      >
        <path
          d="M6 10H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10 6L14 10L10 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </ButtonStyled>
  );
};

export default ItemButton;
