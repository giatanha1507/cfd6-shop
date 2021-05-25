import React from "react";
import { Features, FeaturesBot } from "../../component";
import {
  AboutUs,
  ImagesAbout,
  OurStory,
  OurStory_nd,
  ReviewAbout,
  Slogan,
  SocialAbout,
  Welcome,
} from "./component";

export function About() {
  return (
    <>
      <Welcome />
      <OurStory />
      <AboutUs />
      <OurStory_nd />
      <Slogan />
      <ImagesAbout />
      <ReviewAbout />
      <SocialAbout />
      <FeaturesBot />
    </>
  );
}
