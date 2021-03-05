import React from "react";
import { Title } from "./style";

const ProjectTitle = ({ text }: { text: string }) => {
  return (
    <>
      <Title>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg> */}
        {text}
      </Title>
    </>
  );
};

export default ProjectTitle;
