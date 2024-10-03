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
      <SectionTitle
        preTitle="Light Store"
        title=" Keunggulan Light Store"
      >
        Light Store memiliki berbagai macam game online yang tersedia dengan berbagai macam promo menarik. Kami memiliki berbagai macam bundle yang bisa dibeli lebih murah daripada beli satuannya. Kami menjamin item masuk ke dalam game, Jika tidak maka uang kembali 100%.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />



      <SectionTitle
        preTitle="List Game"
        title="List Game Light Store"
      >
        List game dari Light Store.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
