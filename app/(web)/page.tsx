import HomeBlogs from "@/components/Blogs/HomeBlogs";
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
      <ProdsOne catTitle="iPhone" />
      <ProdsOne catTitle="Samsung Smartphones" />
      <ProdsOne catTitle="Redmi" />
      <ProdsOne catTitle="Tecno" />
      <ProdsOne catTitle="Huawei" />
      <HomeBlogs />
    </>
  );
};

export default Home;
