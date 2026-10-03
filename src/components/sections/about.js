import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 700px;
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'Django',
    'React',
    'TypeScript',
    'PostgreSQL',
    'GraphQL',
    'AWS',
    'Docker',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <StyledText>
        <div>
          <p>
            Hello! My name is Alok and I’m a full-stack developer with around 3 years of
            professional experience building web applications and backend systems. I completed
            my B.Tech in Information Technology from{' '}
            <a href="https://www.globalengineeringcollege.com/">
              Global Engineering College, Jabalpur
            </a>{' '}
            (2020-2024).
          </p>

          <p>
            I’ve worked on production applications at{' '}
            <a href="https://github.com/alok-urmaliya">Sumati.io</a> and{' '}
            <a href="https://thehotspring.com">The Hotspring</a>, working across backend,
            frontend, APIs, databases, background processing, and AWS.
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>
        </div>

        <ul className="skills-list">
          {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </StyledText>
    </StyledAboutSection>
  );
};

export default About;