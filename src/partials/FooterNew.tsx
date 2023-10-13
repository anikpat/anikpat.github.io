import { Section } from 'astro-boilerplate-components';

const FooterNew = () => (
  <Section>
    <footer className="rounded-lg bg-white shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-2 md:py-8">
        <hr className="my-4 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023™
        </span>
      </div>
    </footer>
  </Section>
);

export { FooterNew };
