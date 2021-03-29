import React from "react";
import { Icons, Websites, Wrapper } from "./style";
import { useLocation } from "react-router-dom";

export const TechUsed = ({
  icons,
  websites,
  fitContent,
}: {
  icons: Array<React.ReactNode>;
  websites: React.ReactNode;
  fitContent: boolean;
}) => {
  const location = useLocation();

  return (
    <Wrapper style={{ width: fitContent ? "fit-content" : "auto" }}>
      <Websites>{websites}</Websites>
      <Icons>
        {icons.map((element, index) => (
          <React.Fragment key={`${location.pathname + index}`}>{element}</React.Fragment>
        ))}
      </Icons>
    </Wrapper>
  );
};

export default TechUsed;
