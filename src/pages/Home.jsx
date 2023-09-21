import { SHero } from "../components/SHero";
import { SAbout } from "../components/SAbout";

export default function Home() {
  return (
    <>
      <section id="s-hero" className="text-white pt-[64px] tablet:pt-[96px] bg-secondary-color">
        <SHero />
      </section>
      <section id="s-about" className="bg-white">
        <SAbout />
      </section>
    </>
  );
}
