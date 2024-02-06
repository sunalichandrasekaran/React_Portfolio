import styled from "styled-components";

export const SkillsContainer = styled.div`
  color: #fff;
  background: #0c0c0c;
  padding-top: 2rem;
  /* @media screen and (max-width:768px){
        padding :100px 0;
    } */
`;
export const SkillsCard = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid #808080;
  padding: 2rem 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: "#131c31";

  @media (max-width: 768px) {
    width: 70%;
    margin-left: 5rem;
    margin-top: 2rem;
  }
  @media (max-width: 480px) {
    width: 70%;
    margin-top: 2rem;
    margin-right: 0;
    margin-left: 2.5rem;
  }
`;
export const IconContainer = styled.div`
  font-size: ${({ size }) => size};
  cursor: pointer;
  color: ${({ color }) => {
    switch (color) {
      case "white":
        return "#fff";
      case "blue":
        return "#7eadfc";
      default:
        return;
    }
  }};
`;
export const SkillsCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  padding: 0 5%;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 0;
  }
`;
