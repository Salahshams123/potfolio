import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/Salahresume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
           My name is Salah Shams.I am a Front End web developer based in Egypt.
          </StyledParagraph>
          <StyledParagraph>
         I obtained a bachelors degree from the Faculty of engineering ,Al-Azher university,department of Systems and Computers
          </StyledParagraph>
          <StyledParagraph>
           I attended ITI  where i pursued Front End web web development with React and Angular.
           </StyledParagraph>
          <StyledParagraph>
          I love to create beautiful and responsive solutions.I work with react frameworks for frontend 
          </StyledParagraph>
      
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-jericho-bantiquete"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
