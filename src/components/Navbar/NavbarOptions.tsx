import Home from "@/app/page";
import { SectionLink } from "../SectionLink"
import { SectionEnum } from "../types"

type Props = {
  selectedPage: SectionEnum;
  setSelectedPage: (value: SectionEnum) => void;
};

export const NavbarOptions = ({ selectedPage, setSelectedPage }: Props) => {
  enum SectionEnum {
    ABOUT = 'About',
    PROJECTS = 'Projects',
    CONTACT = 'Contact',
  }
  return (
    <>
      {Object.values(SectionEnum).map((section) => 
       (
        <SectionLink 
          page={section}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          key={section}
        />
      ))}
    </>
  )
}