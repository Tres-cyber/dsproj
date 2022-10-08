import { FunctionComponent } from "react";
import { NavBar, HeroSection, DetailSection } from "../../components";

export const HomePage: FunctionComponent<{}> = function () {
  return <>

        <NavBar/>
        <HeroSection/>  
        <DetailSection/>
  </>;
};
