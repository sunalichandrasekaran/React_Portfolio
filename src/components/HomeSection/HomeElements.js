import styled from "styled-components";

export const HomeContainer = styled.div`
  background: #0f172a;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 0 30px;
  height: 100vh /* 608px */ /* 800px ==================updated */;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6)
      ),
    //   linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100vh /* calc(100vh- 70px) */;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 0px 24px;
  /* padding-top: 25%;  */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* flex-start */
  @media screen and (max-width: 370px) {
    padding-top: 25%;
  }
`;

export const HomeH1 = styled.h1`
  color: #fff;
  font-size: 50px;
  text-align: left; /* left */

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HomeP = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 24px;
  text-align: left; /* left */
  /* max-width:60px; */
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HomeP1 = styled.p`
  margin-top: 20px;
  color: #dcdcdc;
  font-family: DM Sans;s
  font-size: 16px;
  line-height: 1.8;
  text-align: left; /* left */
  /* max-width:60px; */
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const HomePara = styled.p`
  margin-top: 20px;
  color: #dcdcdc;
  font-size: 17px;

  text-align: left; /* left */
  /* max-width:60px; */
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HomeTitle = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 34px;

  text-align: left; /* left */
  /* max-width:60px; */
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
