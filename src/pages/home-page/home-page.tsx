import { FunctionComponent } from "react";
import {
  NavBar,
  HeroSection,
  DetailSection,
  LessonsSection,
  Footer,
} from "../../components";

export const HomePage: FunctionComponent<{}> = function () {
  return (
    <>
      <NavBar />
      <HeroSection />
      <DetailSection />
      <LessonsSection />
      <Footer />
    </>
  );
};
