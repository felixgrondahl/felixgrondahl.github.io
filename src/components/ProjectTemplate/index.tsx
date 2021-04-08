import React from "react";
import { PojectText } from "./style";

export const ProjectTemplate = ({
  year,
  projTitle,
  role,
  tech,
}: {
  year: string;
  projTitle: string;
  role: string;
  tech: string;
}) => {
  return (
    <PojectText>
      <span>{`${year}
        ${projTitle}`}</span>
      <span className="role">{role}</span>
      {tech}
    </PojectText>
  );
};
