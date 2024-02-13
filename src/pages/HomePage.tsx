import MainCarousel from "../components/MainCarousel";
import Hero from "../components/Hero";
import Star from "../components/Star";
import AdCampain from "../components/AdCampain";


const HomePage = () => {
  return (
    <>
      <main className="flex flex-col justify-center">
        <MainCarousel />

        <section className={`relative`}>
          <div className="w-[200px] h-[500px] m-3 absolute top-1/4 left-14 cursor-pointer shadow-md ">
            {/**<BannerAd />*/}
          </div>

          <Hero />
        </section>

        <Star />
        <AdCampain ishome />
      </main>
    </>
  );
};

export default HomePage;
