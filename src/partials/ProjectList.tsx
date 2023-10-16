import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="OfferToOwn"
        description="Offer to Own is a brand new, completely free platform for buyers. Submit and manage your offer quickly and easily. Get equipped for the process ahead with handy tips, tools, and resources. Plus, access experienced and trusted conveyancing and building and pest inspection services."
        link="https://offertoown.com.au/"
        img={{
          src: '/assets/images/oto-project.png',
          alt: 'Project OfferToOwn',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>NestJS (node)</Tags>
            <Tags color={ColorTags.LIME}>Laravel</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.SKY}>Kubernetes</Tags>
            <Tags color={ColorTags.ORANGE}>Temporal</Tags>
            <Tags color={ColorTags.INDIGO}>Terraform IAC</Tags>
          </>
        }
      />
      <Project
        name="HungryHungry"
        description="HungryHungry are the industry leaders in restauran automations. Offering customisable digital solutions for hospo venues including online ordering, options for in-venue and out-of-venue, and a full suite of smart marketing tools."
        link="https://www.hungryhungry.com/"
        img={{ src: '/assets/images/HH.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Express(node)</Tags>
            <Tags color={ColorTags.EMERALD}>Drupal</Tags>
            <Tags color={ColorTags.YELLOW}>React</Tags>
            <Tags color={ColorTags.CYAN}>AWS</Tags>
            <Tags color={ColorTags.GRAY}>IAC</Tags>
            <Tags color={ColorTags.INDIGO}>Cypress</Tags>
            <Tags color={ColorTags.FUCHSIA}>Microservice Architecture</Tags>
          </>
        }
      />
      <Project
        name="ThisWayUp (St Vincent's Hospital)"
        description="THIS WAY UP is a trusted Australian provider of evidence-based, internet-delivered Cognitive Behavioural Therapy (iCBT) programs."
        link="https://thiswayup.org.au/"
        img={{ src: '/assets/images/hospital.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>Laravel</Tags>
            <Tags color={ColorTags.EMERALD}>CakePHP</Tags>
            <Tags color={ColorTags.ZINC}>Lumen</Tags>
            <Tags color={ColorTags.LIME}>Azure</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.PINK}>Docker</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
