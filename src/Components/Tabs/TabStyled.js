import styled from "styled-components";

export const TabStyled = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;
export const TitlesContainer = styled.span`
  display: flex;
  justify-content: space-around;
  margin: 0 1.5rem;
  padding: 0 1rem;
`;
export const Title = styled.span`
  padding: 1.5rem 0;

  cursor: pointer;
  font-size: 1rem;
  position: relative;
  ${(p) => (p.active ? "" : `color:#868687;`)}
  ${(p) => (p.active ? `font-weight:500;` : "")}

 ::after {
    ${(p) => (!p.active ? "display:none;" : "")}
    content: "";
    position: absolute;
    left: 0;
    bottom: 15px;
    width: 0.3rem;
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 0.3rem;
    background-color: #ff164e;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    font-size: 0.9rem;
  }
  @media (max-width: ${({ theme }) => theme.images}) {
    font-size: 0.8rem;
  }
  @media (max-width: ${({ theme }) => theme.max}) {
    font-size: 0.7rem;
  }
`;

export const Content = styled.div`
  margin: 0 0.5rem;
  margin-top: 1rem;
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  height: 580px;
  width: 100%;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;