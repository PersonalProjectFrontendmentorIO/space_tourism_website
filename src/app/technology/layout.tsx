import { ReactNode } from "react";

const TechnologyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default TechnologyLayout;
