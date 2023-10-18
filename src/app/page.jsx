import HeroSection from "../components/homeComponents/heroSection/HeroSection";
import BrandsBand from "../components/homeComponents/brandsBand/BrandsBand";
import BrowseBySection from "../components/homeComponents/browseBySection/BrowseBySection";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NewArrivals from "../components/homeComponents/newArrivals/NewArrivals";
import ByRating from "../components/homeComponents/byRatingProducts/ByRating";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandsBand />
      <NewArrivals />
      <ByRating />
      <BrowseBySection />
      <Footer />
    </>
  );
}
