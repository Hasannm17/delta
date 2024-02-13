import MainCarousel from "../components/MainCarousel";
import Hero from "../components/Hero";
import Star from "../components/Star";
import AdCampain from "../components/AdCampain";

const HomePage = () => {
  return (
    <>
      <main className="flex flex-col justify-center">
        <MainCarousel />
        <Hero />
        <Star />
        <AdCampain />
      </main>
    </>
  );
};

export default HomePage;
