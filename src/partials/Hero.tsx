import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Aniket</GradientText> 👋
        </>
      }
      description={
        <>
          A passionate and dedicated software Engineer with a proven track
          record of developing complex systems. With 8 years of experience in
          Software Engineering, I thrive on tackling complex challenges and
          transforming them into innovative solutions.
          <br />
          My journey in software development has equipped me with a deep
          understanding of all-round Software Engineering challenges. I'm known
          for my ability to be a team player and lead cross-functional teams to
          successful project outcomes.
          <br />
          As a lifelong learner and an avid reader, I'm excited to continuously
          explore new avenues, refine my expertise, and contribute meaningfully
          to realise successful results.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/dev.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/aniket-patwardhan-045ab193/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
