interface SectionWrapperProps {
  children: React.ReactNode;
}

function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <div className="flex items-center justify-center px-2.5 sm:px-4">
      {children}
    </div>
  );
}

export default SectionWrapper;
