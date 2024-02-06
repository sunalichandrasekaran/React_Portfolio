import React from "react";
import {
  HomeContainer,
  HomeContent,
  HomeH1,
  HomePara,
  HomeTitle,
} from "./HomeElements";

function HeroSection() {
  return (
    <HomeContainer id="home">
      <HomeContent>
        <HomeH1>
          I'm <span style={{ color: "#7eadfc" }}>Sunali </span>
        </HomeH1>
        <HomeTitle>
          I'm a <span style={{ color: "#7eadfc" }}>Frontend developer</span>
        </HomeTitle>
        <HomePara>
          Hello there! 👋 I'm Sunali, a passionate and aspiring front-end
          developer with a keen eye for creating visually appealing and
          user-friendly websites. As a recent graduate in 2023, I am excited to
          embark on my journey in the dynamic world of web development.
        </HomePara>
        <span className="float-left">
          <a
            href="mailto:sunalichandrasekaran06@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", fontSize: "25px" }}
            className="btn btn-sm btn-default "
          >
            <i class="fad fa-envelope"></i>
          </a>
          &emsp;
          <a
            href="https://github.com/sunalichandrasekaran"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", fontSize: "25px" }}
            className="btn btn-sm btn-default "
          >
            <i className="fab fa-github"></i>
          </a>
          &emsp;
          <a
            href="https://www.linkedin.com/in/sunalichandrasekaran-ac/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", fontSize: "25px" }}
            className="btn btn-sm  "
          >
            <i className="fab fa-linkedin"></i>
          </a>
          &emsp;
        </span>
      </HomeContent>
    </HomeContainer>
  );
}

export default HeroSection;
