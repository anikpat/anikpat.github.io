import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-8 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          }
          name="Aniket's Blog"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/anikpat">GitHub</NavMenuItem>
        <NavMenuItem href="https://medium.com/@anikpat">Medium</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
