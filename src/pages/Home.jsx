import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <section id="s-hero" className="text-white pt-[64px] tablet:pt-[96px] bg-secondary-color">
        <Hero />
      </section>
    </>
  );
}
