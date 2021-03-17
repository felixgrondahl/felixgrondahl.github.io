import React from "react";
import { MidWrapper } from "globalStyles/wrappers";
import MeImage from "assets/images/headshotsmall.png";
import { ProfileImg, TextWrapper, MobileHeader } from "./style";

const AboutMe = () => {
  return (
    <>
    <MobileHeader>ABOUT ME</MobileHeader>
    <MidWrapper>
      <ProfileImg style={{ backgroundImage: `url(${MeImage})` }} />
      <TextWrapper>
        <h1>FELIX GRÖNDAHL</h1>
        <p>
          <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit libero quis urna molestie, sed tempor diam auctor.`}</span>
          <span>{` Praesent dapibus libero sit amet posuere ultricies. Morbi magna nibh, elementum eget vestibulum vitae, ornare at elit. Cras sagittis ex id dolor pellentesque rutrum. Curabitur vel elit quis leo vulputate imperdiet in in magna.`}</span>
          <span>{`Vestibulum tempus magna augue, vel vestibulum lorem gravida id. Phasellus at lobortis velit. Phasellus congue tristique condimentum. Morbi vitae eleifend purus, quis pharetra leo. Suspendisse euismod nec mauris in pharetra. Sed semper lectus eu lorem posuere condimentum. Donec enim est, pretium ut maximus a, vehicula quis mauris. Ut mauris lorem, finibus sed tempus efficitur, pulvinar id quam. Nunc non risus massa. Phasellus a purus nec ipsum sagittis finibus.`}</span>
        </p>
      </TextWrapper>
    </MidWrapper>
    </>
  );
};

export default AboutMe;
