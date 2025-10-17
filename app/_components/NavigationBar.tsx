import { SectionType } from "../_utils/types";

interface NavigationBarProps {
  active: SectionType;
  setActive: (active: SectionType) => void;
}

function NavigationBar({ active, setActive }: NavigationBarProps) {
  return <div></div>;
}

export default NavigationBar;
