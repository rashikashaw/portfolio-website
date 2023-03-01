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
      className={`${selectedPage === page ? 'text-primary-500' : ''}
        hover:text-primary-300 transition duration-500
      `}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {page}
    </AnchorLink>
  );
};
