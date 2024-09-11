import Hero from "@/components/Hero/Hero";
import NewProds from "@/components/ProductSections/NewProds";
import PopCats from "@/components/ProductSections/PopCats";
import PopProds from "@/components/ProductSections/PopProds";
import ProdsOne from "@/components/ProductSections/ProdsOne";

const Home: React.FC = () => {


  return (
    <>
      <Hero />
      <PopProds />
      <PopCats />
      <NewProds />
      <ProdsOne />
      <ProdsOne />
      <ProdsOne />
    </>
  );
};

export default Home;
