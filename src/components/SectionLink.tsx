import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SectionEnum } from './types';

type SectionLinkProps = {
  page: SectionEnum;
  selectedPage: SectionEnum;
  setSelectedPage: (value: SectionEnum) => void;
};

export const SectionLink = (props: SectionLinkProps) => {
  const { page, selectedPage, setSelectedPage } = props;

  return (
    <AnchorLink
      className={`${selectedPage === page ? 'text-cyan-500' : ''}
        hover:text-cyan-900 dark:hover:text-cyan-800 hover:drop-shadow-3xl transition duration-300
      `}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {page}
    </AnchorLink>
  );
};
