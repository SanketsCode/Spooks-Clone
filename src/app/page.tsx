import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle preTitle="Introduction" title="At SPARCK ADVERTISING">
        we are dedicated to helping businesses thrive in the digital world. Our
        team of experienced professionals leverages the latest trends and
        technologies to deliver exceptional results. Our commitment is to exceed
        your expectations and drive your success
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="Portfolio" title="Here's what our customers said">
        Here is our Project Details which we are offering for multiple
        businesses and more feature that will help you to reach more audience
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Here Are some Questions which will tell you about us a bit more for
        better understanding to do business with us
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
    </Container>
  );
}
