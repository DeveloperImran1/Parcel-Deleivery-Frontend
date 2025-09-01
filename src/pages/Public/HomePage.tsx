import FeaturesSection from "@/components/modules/Home/FeaturedSection";
import HeroSection from "@/components/modules/Home/HeroSection";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import SendOptions from "@/components/modules/Home/SendOption";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <SendOptions></SendOptions>
      <HowItWorks></HowItWorks>
      <FeaturesSection></FeaturesSection>
    </div>
  );
};

export default HomePage;
