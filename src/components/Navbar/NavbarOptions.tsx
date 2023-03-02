import Home from "@/app/page";
import { SectionLink } from "../SectionLink"
import { SectionEnum } from "../types"

type Props = {
  selectedPage: SectionEnum;
  setSelectedPage: (value: SectionEnum) => void;
};

export const NavbarOptions = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <>
      {Object.values(SectionEnum).map((section) => 
        section === 'Home' ? 
      (<></> ) : (
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