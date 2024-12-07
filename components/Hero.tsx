import { BackgroundCarousel } from "./ui/background-carousel";
import { HeroContent } from "./sections/hero/hero-content";
import { HeroWrapper } from "./sections/hero/hero-wrapper";

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-116px)]">
      <HeroWrapper>
        <BackgroundCarousel />
        <HeroContent />
      </HeroWrapper>
    </div>
  );
};

export default Hero;
